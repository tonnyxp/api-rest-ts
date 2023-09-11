import UserModel from "../models/users";
import { User } from "../interfaces/users.interface";

const getUsers = async () => {
  return await UserModel.findAll();
};

const getUser = async (id: number) => {
  return await UserModel.findByPk(id);
};

const updateUser = async (id: number, user: User) => {
  return await UserModel.update({ ...user }, { where: { id } });
};

const deleteUser = async (id: number) => {
  return await UserModel.destroy({ where: { id } });
};

export { getUsers, getUser, updateUser, deleteUser };
