import { Router } from "express";
import { checkJwt } from "../middlewares/session";
import { OrderController } from "../controllers/orders.controller";

const router = Router();
/**
 * http://localhost:3000/api/orders
 */
router.use(checkJwt);

router.post("/", OrderController.create);

export default router;
