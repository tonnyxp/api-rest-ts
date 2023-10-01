import { NextFunction, Request, Response } from "express";
import { check } from "express-validator";
import { validateResult } from "../utils/validator.handle";

const validateStaff = [
  check("firstName", "El nombre es requerido").notEmpty(),
  check("lastName", "El apellido es requerido").notEmpty(),
  check("email", "El email es requerido").isEmail(),
  check("phone", "El telefono es requerido").notEmpty(),
  check("birthdate", "La fecha de nacimiento es requerida").notEmpty(),
  check("gender", "El genero es requerido").notEmpty(),
  check("active", "El estatus es requerido").notEmpty(),
  check("storeId", "El storeId es requerido").notEmpty(),
  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next);
  },
];

export { validateStaff };
