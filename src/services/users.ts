import UserModel from "../models/users";
import { User } from "../interfaces/users.interface";

const getUsers = async () => {
  const response = await UserModel.findAll();
  return response;
};

const getUser = async (id: string) => {
  const response = await UserModel.findByPk(id);
  return response;
};

const updateUser = async (id: string, user: User) => {
  const response = await UserModel.update({ ...user }, { where: { id } });
  return response;
};

const deleteUser = async (id: string) => {
  const response = await UserModel.destroy({ where: { id } });
  return response;
};

export { getUsers, getUser, updateUser, deleteUser };
