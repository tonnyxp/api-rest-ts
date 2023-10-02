import { NextFunction, Request, Response } from "express";
import { check } from "express-validator";
import { validateResult } from "../utils/validator.handle";

const validateCustomer = [
  check("code", "El código es requerido").notEmpty(),
  check("name", "El nombre es requerido").notEmpty(),
  check("contact", "El contacto es requerido").exists(),
  check("phone", "El teléfono es requerido").notEmpty(),
  check("email", "El correo es requerido").isEmail(),
  check("street", "La calle es requerida").notEmpty(),
  check("suburb", "La colonia es requerida").notEmpty(),
  check("city", "La ciudad es requerida").notEmpty(),
  check("state", "El estado es requerido").notEmpty(),
  check("zipCode", "El código postal es requerido").notEmpty(),
  check("country", "El país es requerido").notEmpty(),
  check("type", "El tipo es requerido").notEmpty(),
  check("status", "El estado es requerido").notEmpty(),
  check("creditSale", "La venta a crédito es requerida").notEmpty(),
  check("creditLimit", "El límite de crédito es requerido").notEmpty(),
  check("creditDays", "Los días de crédito son requeridos").notEmpty(),
  check("note", "La nota es requerida").exists(),
  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next);
  },
];

export { validateCustomer };
