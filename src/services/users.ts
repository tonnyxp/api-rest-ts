import { type User } from "../interfaces/users.interface";
import UserModel from "../models/users";

const getUsers = async () => {
  const result = await UserModel.findAll();
  return result;
};

const getUser = async (id: number) => {
  const result = await UserModel.findByPk(id);
  return result;
};

const createUser = async (user: User) => {
  const result = await UserModel.create({ ...user });
  return result;
};

const updateUser = async (id: number, user: User) => {
  const result = await UserModel.update({ ...user }, { where: { id } });
  return result;
};

const deleteUser = async (id: number) => {
  const result = await UserModel.destroy({ where: { id } });
  return result;
};

export { getUsers, getUser, createUser, updateUser, deleteUser };
