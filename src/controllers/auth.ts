import { Request, Response } from "express";
import { loginAuth, registerAuth } from "../services/auth";
import { handleErrorResponse, handleHttpError } from "../utils/error.handle";

const registerCtrl = async ({ body }: Request, res: Response) => {
  try {
    const data = await registerAuth(body);
    if (data === "USER_EXISTS") {
      return handleErrorResponse(res, "Este correo ya existe", 400);
    }

    res.status(200).send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_REGISTER");
  }
};

const loginCtrl = async ({ body }: Request, res: Response) => {
  try {
    const { email, password } = body;
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

export { registerCtrl, loginCtrl };
