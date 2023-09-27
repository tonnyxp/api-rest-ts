import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { validateLogin, validateRegister } from "../validators/auth.validator";

const router = Router();
/**
 * http://localhost:3000/api/auth
 */

router.post("/register", validateRegister, AuthController.register);
router.post("/login", validateLogin, AuthController.login);

export default router;
