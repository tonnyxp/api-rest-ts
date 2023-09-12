import { Request, Response } from "express";
import { handleHttpError } from "../utils/error.handle";
import { getUser, getUsers, updateUser, deleteUser } from "../services/users";

const getAll = async (req: Request, res: Response) => {
  try {
    const data = await getUsers();
    res.status(200).send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

const getById = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const data = await getUser(id);
    res.status(200).send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ITEM");
  }
};

const update = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const data = await updateUser(id, body);
    res.status(200).send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_PUT_ITEM");
  }
};

const destroy = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const data = await deleteUser(id);
    res.status(200).send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_DELETE_ITEM");
  }
};

export { getAll, getById, update, destroy };
