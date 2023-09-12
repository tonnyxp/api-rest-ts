import { Router } from "express";
import { register, login } from "../controllers/auth";

const router = Router();
/**
 * http://localhost:3000/api/auth
 */
router.post("/register", register);

router.post("/login", login);

export default router;
