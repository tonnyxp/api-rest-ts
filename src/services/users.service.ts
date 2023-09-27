import User from "../models/users.model";
import { UserRepository } from "../repositories/users.repository";

export class UserService {
  static async getUsers(): Promise<User[]> {
    try {
      const users = await UserRepository.findAll();
      return users;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static async getUser(id: string): Promise<User | null> {
    try {
      const user = await UserRepository.findById(id);
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
      const user = await UserRepository.update(id, updatedUser);
      return user;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async deleteUser(id: string): Promise<boolean> {
    try {
      const success = await UserRepository.delete(id);
      return success;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
