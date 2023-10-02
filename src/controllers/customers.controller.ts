import { Request, Response } from "express";
import { CustomerService } from "../services/customers.service";
import { handleHttpError, handleErrorResponse } from "../utils/error.handle";

export class CustomerController {
  static async create({ body }: Request, res: Response) {
    try {
      const data = await CustomerService.createCustomer(body);
      if (!data)
        return handleErrorResponse(res, "No se pudo crear el cliente", 500);

      res.status(201).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al crear el cliente");
    }
  }

  static async findAll(req: Request, res: Response) {
    try {
      const data = await CustomerService.getCustomers();
      res.status(200).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al obtener la lista de clientes");
    }
  }

  static async findOne({ params }: Request, res: Response) {
    try {
      const { id } = params;
      const data = await CustomerService.getCustomer(id);
      if (!data) return handleErrorResponse(res, "Cliente no encontrado", 404);

      return res.status(200).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al obtener el cliente");
    }
  }

  static async update({ params, body }: Request, res: Response) {
    try {
      const { id } = params;
      const data = await CustomerService.updateCustomer(id, body);
      if (!data) return handleErrorResponse(res, "Cliente no encontrado", 404);

      res.status(200).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al actualizar el cliente");
    }
  }
}
