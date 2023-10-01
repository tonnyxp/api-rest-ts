import { Request, Response } from "express";
import { ProductService } from "../services/products.service";
import { handleHttpError, handleErrorResponse } from "../utils/error.handle";

export class ProductController {
  static async create({ body }: Request, res: Response) {
    try {
      const data = await ProductService.createProduct(body);
      if (!data)
        return handleErrorResponse(res, "No se pudo crear el producto", 500);

      res.status(201).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al crear el producto");
    }
  }

  static async findAll(req: Request, res: Response) {
    try {
      const data = await ProductService.getProducts();
      res.status(200).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al obtener la lista de productos");
    }
  }

  static async findOne({ params }: Request, res: Response) {
    try {
      const { id } = params;
      const data = await ProductService.getProduct(id);
      if (!data) return handleErrorResponse(res, "Producto no encontrado", 404);

      return res.status(200).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al obtener el producto");
    }
  }

  static async update({ params, body }: Request, res: Response) {
    try {
      const { id } = params;
      const data = await ProductService.updateProduct(id, body);
      if (!data) return handleErrorResponse(res, "Producto no encontrado", 404);

      res.status(200).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al actualizar el producto");
    }
  }

  static async remove({ params }: Request, res: Response) {
    try {
      const { id } = params;
      const data = await ProductService.deleteProduct(id);
      if (!data) return handleErrorResponse(res, "Producto no encontrado", 404);

      res.status(200).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al eliminar el producto");
    }
  }
}
