import User from "../models/users.model";

export class UserService {
  static async getUsers(): Promise<User[]> {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static async getUser(id: string): Promise<User | null> {
    try {
      const user = await User.findByPk(id);
      return user;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async updateUser(
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

  static async deleteUser(id: string): Promise<boolean> {
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
}
