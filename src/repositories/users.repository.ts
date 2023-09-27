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

  static async findById(id: string): Promise<User | null> {
    try {
      const user = await User.findByPk(id);
      return user;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async findAll(): Promise<User[]> {
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

  static async findOne(value: any): Promise<User | null> {
    try {
      const user = await User.findOne({ where: value });
      return user;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
