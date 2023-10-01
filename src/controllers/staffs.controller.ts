import { Request, Response } from "express";
import { StaffService } from "../services/staffs.service";
import { handleErrorResponse, handleHttpError } from "../utils/error.handle";

export class StaffController {
  static async findAll(req: Request, res: Response) {
    try {
      const data = await StaffService.getStaffs();
      res.status(200).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al obtener la lista de usuarios");
    }
  }

  static async findOne({ params }: Request, res: Response) {
    try {
      const { id } = params;
      const data = await StaffService.getStaff(id);
      if (!data) return handleErrorResponse(res, "Usuario no encontrado", 404);

      return res.status(200).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al obtener el usuario");
    }
  }

  static async update({ params, body }: Request, res: Response) {
    try {
      const { id } = params;
      const data = await StaffService.updateStaff(id, body);
      if (!data) return handleErrorResponse(res, "Usuario no encontrado", 404);

      res.status(200).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al actualizar el usuario");
    }
  }
}
