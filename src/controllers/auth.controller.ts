import { Request, Response } from "express";
import { AuthRepository } from "../services/auth.service";
import { handleErrorResponse, handleHttpError } from "../utils/error.handle";

export class AuthController {
  static async register({ body }: Request, res: Response) {
    try {
      const data = await AuthRepository.authRegister(body);
      if (data === "USER_EXISTS") {
        return handleErrorResponse(res, "Este correo ya existe", 400);
      }

      res.status(201).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al registrar el usuario");
    }
  }

  static async login({ body }: Request, res: Response) {
    try {
      const data = await AuthRepository.authLogin(body);
      if (data === "USER_NOT_EXISTS") {
        return handleErrorResponse(res, "No se encontro ninguna cuenta", 404);
      } else if (data === "PASSWORD_INCORRECT") {
        return handleErrorResponse(res, "La contraseña es incorrecta", 403);
      }

      res.status(200).send({ data });
    } catch (e) {
      handleHttpError(res, "Error al iniciar sesión");
    }
  }
}
