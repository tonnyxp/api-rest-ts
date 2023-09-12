import UserModel from "../models/users";
import { User } from "../interfaces/users.interface";

const getUsers = async () => {
  return await UserModel.findAll();
};

const getUser = async (id: string) => {
  return await UserModel.findByPk(id);
};

const updateUser = async (id: string, user: User) => {
  return await UserModel.update({ ...user }, { where: { id } });
};

const deleteUser = async (id: string) => {
  return await UserModel.destroy({ where: { id } });
};

export { getUsers, getUser, updateUser, deleteUser };
