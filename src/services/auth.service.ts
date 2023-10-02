import { sequelize } from "../config/mysql";
import User from "../models/users.model";
import Staff from "../models/staffs.model";
import {
  PASSWORD_INCORRECT,
  USER_EXISTS,
  USER_NOT_EXISTS,
} from "../constants/auth";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

export class AuthService {
  static async registerUser({ name, email, password }: User) {
    const transaction = await sequelize.transaction();

    try {
      const checkIt = await User.findOne({ where: { email } });
      if (checkIt) return USER_EXISTS;

      const passwordHash = await encrypt(password);
      const user = await User.create(
        {
          name,
          email,
          password: passwordHash,
        },
        { transaction }
      );

      // TODO: Agregar el usuario al staff
      await Staff.create(
        {
          userId: user.uuid,
          firstName: name,
          email,
        },
        { transaction }
      );

      await transaction.commit();
      return user;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  static async loginUser({ email, password }: User) {
    const user = await User.findOne({ where: { email } });
    if (!user) return USER_NOT_EXISTS;

    const checkPassword = await verified(password, user.password);
    if (!checkPassword) return PASSWORD_INCORRECT;

    const token = generateToken(user);
    const data = {
      token,
      user,
    };

    return data;
  }
}
