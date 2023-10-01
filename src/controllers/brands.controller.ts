import { Request, Response } from "express";
import { BrandService } from "../services/brands.service";
import { handleHttpError, handleErrorResponse } from "../utils/error.handle";

export class BrandController {
  static async create({ body }: Request, res: Response) {
    try {
      const data = await BrandService.createBrand(body);
      if (!data)
        return handleErrorResponse(res, "No se pudo crear la marca", 500);

      res.status(201).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al crear la marca");
    }
  }

  static async findAll(req: Request, res: Response) {
    try {
      const data = await BrandService.getBrands();
      res.status(200).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al obtener la lista de marcas");
    }
  }

  static async findOne({ params }: Request, res: Response) {
    try {
      const { id } = params;
      const data = await BrandService.getBrand(id);
      if (!data) return handleErrorResponse(res, "Marca no encontrada", 404);

      return res.status(200).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al obtener la marca");
    }
  }

  static async update({ params, body }: Request, res: Response) {
    try {
      const { id } = params;
      const data = await BrandService.updateBrand(id, body);
      if (!data) return handleErrorResponse(res, "Marca no encontrada", 404);

      res.status(200).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al actualizar la marca");
    }
  }

  static async remove({ params }: Request, res: Response) {
    try {
      const { id } = params;
      const data = await BrandService.deleteBrand(id);
      if (!data) return handleErrorResponse(res, "Marca no encontrada", 404);

      res.status(200).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al eliminar la marca");
    }
  }
}
