import { NextFunction, Request, Response } from "express";
import { RequestExt } from "../interfaces/request-ext";
import { verifyToken } from "../utils/jwt.handle";
import { handleErrorResponse } from "../utils/error.handle";

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    if (!req.headers.authorization) {
      handleErrorResponse(res, "Not Authorized", 401);
      return;
    }

    const token = req.headers.authorization.split(" ").pop();
    const isUser = verifyToken(`${token}`) as { id: string };
    if (!isUser) {
      handleErrorResponse(res, "Not Authorized", 403);
    } else {
      req.user = isUser;
      next();
    }
  } catch (e) {
    console.log({ e });
    res.status(400).send({ error: "Invalid token" });
  }
};

export { checkJwt };
