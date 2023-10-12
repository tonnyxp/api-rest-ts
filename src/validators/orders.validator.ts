import { NextFunction, Request, Response } from "express";
import { check } from "express-validator";
import { validateResult } from "../utils/validator.handle";

const validateOrder = [
  check("customerId", "El proveedor es requerido").notEmpty(),
  check("orderDate", "La fecha de la orden es requerida").notEmpty(),
  check("requiredDate", "La fecha requerida es obligatoria").notEmpty(),
  check("note", "La nota es requerida").exists(),
  check("storeId", "La tienda es requerida").notEmpty(),
  check("items", "Los productos son requeridos").notEmpty().isArray(),
  check("items.*.productId", "El producto es requerido").notEmpty(),
  check("items.*.quantity", "La cantidad es requerida").notEmpty(),
  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next);
  },
];

export { validateOrder };
