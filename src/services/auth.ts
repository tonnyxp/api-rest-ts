import UserModel from "../models/users";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";
import { User } from "../interfaces/users.interface";
import { Auth } from "../interfaces/auth.interface";

const registerAuth = async ({ name, email, password }: User) => {
  const checkIt = await UserModel.findOne({ where: { email } });
  if (checkIt) return "USER_EXISTS";

  const passwordHash = await encrypt(password);
  const user = await UserModel.create({ name, email, password: passwordHash });

  return user;
};

const loginAuth = async ({ email, password }: Auth) => {
  const user = await UserModel.findOne({ where: { email } });
  if (!user) return "USER_NOT_EXISTS";

  const checkPassword = await verified(password, user.password);
  if (!checkPassword) return "PASSWORD_INCORRECT";

  const token = await generateToken(user);
  const data = {
    token,
    user,
  };

  return data;
};

export { registerAuth, loginAuth };
