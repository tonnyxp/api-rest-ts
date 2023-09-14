import { Request, Response } from "express";
import { loginAuth, registerAuth } from "../services/auth";
import { handleErrorResponse, handleHttpError } from "../utils/error.handle";
import { validateUser } from "../schemas/users";

const register = async ({ body }: Request, res: Response) => {
  try {
    const result = validateUser(body);
    if (!result.success) {
      return handleErrorResponse(res, JSON.parse(result.error.message), 400);
    }

    const data = await registerAuth(result.data);
    if (data === "USER_EXISTS") {
      return handleErrorResponse(res, "Este correo ya existe", 400);
    }

    res.status(201).send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_REGISTER");
  }
};

const login = async ({ body }: Request, res: Response) => {
  try {
    const result = validateUser(body);
    if (!result.success) {
      return handleErrorResponse(res, JSON.parse(result.error.message), 400);
    }

    const { email, password } = result.data;
    const data = await loginAuth({ email, password });

    if (data === "USER_NOT_EXISTS") {
      return handleErrorResponse(res, "No se encontro ninguna cuenta", 404);
    } else if (data === "PASSWORD_INCORRECT") {
      return handleErrorResponse(res, "La contraseña es incorrecta", 403);
    }

    res.status(200).send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_LOGIN");
  }
};

export { register, login };
