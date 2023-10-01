import { NextFunction, Request, Response } from "express";
import { check } from "express-validator";
import { validateResult } from "../utils/validator.handle";

const validateProduct = [
  check("code", "El codigo es requerido").notEmpty(),
  check("name", "El nombre es requerido").notEmpty(),
  check("description", "La descripcion es requerida").exists(),
  check("model", "El modelo es requerido").exists(),
  check("cost", "El costo es requerido").exists(),
  check("price", "El precio es requerido").notEmpty(),
  check("stocktaking", "El inventario es requerido").notEmpty(),
  check("active", "El estado es requerido").notEmpty(),
  check("categoryId", "La categoria es requerida").notEmpty(),
  check("brandId", "La marca es requerida").exists(),
  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next);
  },
];

export { validateProduct };
