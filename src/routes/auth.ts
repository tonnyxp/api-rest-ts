import { Router } from "express";
import { registerCtrl, loginCtrl } from "../controllers/auth";

const router = Router();
/**
 * http://localhost:3000/api/auth
 */
router.post("/register", registerCtrl);

router.post("/login", loginCtrl);

export default router;
