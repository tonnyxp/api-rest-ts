import { Router } from "express";
import { checkJwt } from "../middlewares/session";
import { OrderController } from "../controllers/orders.controller";

const router = Router();
/**
 * http://localhost:3000/api/orders
 */
router.use(checkJwt);

router.get("/", OrderController.findAll);
router.post("/", OrderController.create);

router.get("/:id", OrderController.findOne);
router.patch("/:id", OrderController.update);

router.delete("/item/:id", OrderController.deleteItem);

export default router;
