import { NextFunction, Request, Response } from "express";
import { check } from "express-validator";
import { validateResult } from "../utils/validator.handle";

const validateStore = [
  check("code", "El código es requerido").notEmpty(),
  check("name", "El nombre es requerido").notEmpty(),
  check("phone", "El teléfono es requerido").notEmpty(),
  check("email", "El email es requerido").isEmail(),
  check("street", "La calle es requerida").notEmpty(),
  check("suburb", "La colonia es requerida").notEmpty(),
  check("city", "La ciudad es requerida").notEmpty(),
  check("state", "El estado es requerido").notEmpty(),
  check("zipCode", "El código postal es requerido").notEmpty(),
  check("country", "El país es requerido").notEmpty(),
  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next);
  },
];

export { validateStore };
