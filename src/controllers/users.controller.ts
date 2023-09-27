import { Request, Response } from "express";
import { UserService } from "../services/users.service";
import { handleErrorResponse, handleHttpError } from "../utils/error.handle";

export class UserController {
  static async getItems(req: Request, res: Response) {
    try {
      const data = await UserService.getUsers();
      res.status(200).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al obtener la lista de usuarios");
    }
  }

  static async getItem({ params }: Request, res: Response) {
    try {
      const { id } = params;
      const data = await UserService.getUser(id);
      if (!data) return handleErrorResponse(res, "Usuario no encontrado", 404);

      return res.status(200).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al obtener el usuario");
    }
  }

  static async updateItem({ params, body }: Request, res: Response) {
    try {
      const { id } = params;
      const data = await UserService.updateUser(id, body);
      if (!data) return handleErrorResponse(res, "Usuario no encontrado", 404);

      res.status(200).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al actualizar el usuario");
    }
  }

  static async deleteItem({ params }: Request, res: Response) {
    try {
      const { id } = params;
      const data = await UserService.deleteUser(id);
      if (!data) return handleErrorResponse(res, "Usuario no encontrado", 404);

      res.status(200).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al eliminar el usuario");
    }
  }
}
