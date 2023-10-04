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
}
