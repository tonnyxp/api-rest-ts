import { Request, Response } from "express";
import { AuthRepository } from "../services/auth.service";
import {
  PASSWORD_INCORRECT,
  USER_EXISTS,
  USER_NOT_EXISTS,
} from "../constants/auth";
import { handleErrorResponse, handleHttpError } from "../utils/error.handle";

export class AuthController {
  static async register({ body }: Request, res: Response) {
    try {
      const data = await AuthRepository.registerUser(body);

      if (data === USER_EXISTS) {
        return handleErrorResponse(res, "El usuario ya existe", 500);
      }

      res.status(201).send({ data });
    } catch (e) {
      handleHttpError(res, "No se pudo registrar al usuario");
    }
  }

  static async login({ body }: Request, res: Response) {
    try {
      const data = await AuthRepository.loginUser(body);

      if (data === USER_NOT_EXISTS) {
        return handleErrorResponse(res, "Usuario no encontrado", 401);
      } else if (data === PASSWORD_INCORRECT) {
        return handleErrorResponse(res, "Contraseña incorrecta", 401);
      }

      res.status(200).send({ data });
    } catch (e) {
      handleHttpError(res, "Credenciales incorrectas");
    }
  }
}
