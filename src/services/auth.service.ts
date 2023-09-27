import User from "../models/users.model";
import { UserRepository } from "../repositories/users.repository";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

export class AuthRepository {
  static async authRegister({ name, email, password }: User) {
    const checkIt = await UserRepository.findOne({ email });
    if (checkIt) return "USER_EXISTS";

    const passwordHash = await encrypt(password);
    const user = await UserRepository.create({
      name,
      email,
      password: passwordHash,
    });

    return user;
  }

  static async authLogin({ email, password }: User) {
    const user = await UserRepository.findOne({ email });
    if (!user) return "USER_NOT_EXISTS";

    const checkPassword = await verified(password, user.password);
    if (!checkPassword) return "PASSWORD_INCORRECT";

    const token = generateToken(user);
    const data = {
      token,
      user,
    };

    return data;
  }
}
