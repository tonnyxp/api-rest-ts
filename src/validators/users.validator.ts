import { NextFunction, Request, Response } from "express";
import { check } from "express-validator";
import { validateResult } from "../utils/validator.handle";

const validateUser = [
  check("name", "El nombre es requerido").notEmpty(),
  check("email", "El email es requerido").isEmail(),
  check("verified", "El estado de verificación es requerido").notEmpty(),
  check("role", "El rol es requerido").notEmpty(),
  check("active", "El estado de activación es requerido").notEmpty(),
  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next);
  },
];

export { validateUser };
