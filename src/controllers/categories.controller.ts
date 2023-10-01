import { Request, Response } from "express";
import { CategoryService } from "../services/categories.service";
import { handleHttpError, handleErrorResponse } from "../utils/error.handle";

export class CategoryController {
  static async create({ body }: Request, res: Response) {
    try {
      const data = await CategoryService.createCategory(body);
      if (!data)
        return handleErrorResponse(res, "No se pudo crear la categoría", 500);

      res.status(201).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al crear la categoría");
    }
  }

  static async findAll(req: Request, res: Response) {
    try {
      const data = await CategoryService.getCategories();
      res.status(200).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al obtener la lista de categorías");
    }
  }

  static async findOne({ params }: Request, res: Response) {
    try {
      const { id } = params;
      const data = await CategoryService.getCategory(id);
      if (!data)
        return handleErrorResponse(res, "Categoría no encontrada", 404);

      return res.status(200).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al obtener la categoría");
    }
  }

  static async update({ params, body }: Request, res: Response) {
    try {
      const { id } = params;
      const data = await CategoryService.updateCategory(id, body);
      if (!data)
        return handleErrorResponse(res, "Categoría no encontrada", 404);

      res.status(200).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al actualizar la categoría");
    }
  }

  static async remove({ params }: Request, res: Response) {
    try {
      const { id } = params;
      const data = await CategoryService.deleteCategory(id);
      if (!data)
        return handleErrorResponse(res, "Categoría no encontrada", 404);

      res.status(200).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al eliminar la categoría");
    }
  }
}
