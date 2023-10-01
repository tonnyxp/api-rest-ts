import { NextFunction, Request, Response } from "express";
import { check } from "express-validator";
import { validateResult } from "../utils/validator.handle";

const validateCategory = [
  check("name", "El nombre es requerido").notEmpty(),
  check("description", "La descripción es requerida").exists(),
  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next);
  },
];

export { validateCategory };
