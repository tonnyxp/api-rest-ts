import { Request, Response } from "express";
import { OrderService } from "../services/orders.service";
import { handleHttpError, handleErrorResponse } from "../utils/error.handle";
import { RequestExt } from "../interfaces/request-ext";

export class OrderController {
  static async create({ body, user }: RequestExt, res: Response) {
    try {
      const data = await OrderService.createOrder({
        ...body,
        userId: user?.id,
      });

      if (!data)
        return handleErrorResponse(res, "No se pudo crear la orden", 500);

      res.status(201).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al crear la orden");
    }
  }

  static async findAll(req: Request, res: Response) {
    try {
      const data = await OrderService.getOrders();
      res.status(200).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al obtener las ordenes");
    }
  }

  static async findOne({ params }: Request, res: Response) {
    try {
      const { id } = params;
      const data = await OrderService.getOrder(id);
      if (!data) return handleErrorResponse(res, "Orden no encontrada", 404);

      return res.status(200).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al obtener la orden");
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await OrderService.updateOrder(id, req.body);
      if (!data) return handleErrorResponse(res, "Orden no encontrada", 404);

      return res.status(200).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al actualizar la orden");
    }
  }

  static async deleteItem(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await OrderService.deleteOrderItem(id);
      if (!data) return handleErrorResponse(res, "Detalle no encontrado", 404);

      return res.status(200).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al eliminar el detalle");
    }
  }
}
