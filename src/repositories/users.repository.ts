import User from "../models/users.model";

export class UserRepository {
  static async create(user: Partial<User>): Promise<User | null> {
    try {
      const newUser = await User.create(user);
      return newUser;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async getById(id: string): Promise<User | null> {
    try {
      const user = await User.findByPk(id);
      return user;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async getAll(): Promise<User[]> {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static async update(
    id: string,
    updatedUser: Partial<User>
  ): Promise<User | null> {
    try {
      const user = await User.findByPk(id);
      if (!user) return null;

      await user.update(updatedUser);
      return user;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async delete(id: string): Promise<boolean> {
    try {
      const user = await User.findByPk(id);
      if (!user) return false;

      await user.destroy();
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  static async getByEmail(email: any): Promise<User | null> {
    try {
      const user = await User.findOne({ where: email });
      return user;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
