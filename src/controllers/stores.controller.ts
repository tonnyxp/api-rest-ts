import { Request, Response } from "express";
import { StoreService } from "../services/stores.service";
import { handleHttpError, handleErrorResponse } from "../utils/error.handle";

export class StoreController {
  static async create({ body }: Request, res: Response) {
    try {
      const data = await StoreService.createStore(body);
      if (!data)
        return handleErrorResponse(res, "No se pudo crear la tienda", 500);

      res.status(201).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al crear la tienda");
    }
  }

  static async findAll(req: Request, res: Response) {
    try {
      const data = await StoreService.getStores();
      res.status(200).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al obtener la lista de tiendas");
    }
  }

  static async findOne({ params }: Request, res: Response) {
    try {
      const { id } = params;
      const data = await StoreService.getStore(id);
      if (!data) return handleErrorResponse(res, "Tienda no encontrada", 404);

      return res.status(200).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al obtener la tienda");
    }
  }

  static async update({ params, body }: Request, res: Response) {
    try {
      const { id } = params;
      const data = await StoreService.updateStore(id, body);
      if (!data) return handleErrorResponse(res, "Tienda no encontrada", 404);

      res.status(200).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al actualizar la tienda");
    }
  }

  static async remove({ params }: Request, res: Response) {
    try {
      const { id } = params;
      const data = await StoreService.deleteStore(id);
      if (!data) return handleErrorResponse(res, "Tienda no encontrada", 404);

      res.status(200).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al eliminar la tienda");
    }
  }
}
