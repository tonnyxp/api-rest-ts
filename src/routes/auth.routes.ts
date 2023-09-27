import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";

const router = Router();
/**
 * http://localhost:3000/api/auth
 */

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

export default router;
