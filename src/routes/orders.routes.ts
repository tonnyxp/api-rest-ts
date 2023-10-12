import { Router } from "express";
import { checkJwt } from "../middlewares/session";
import { OrderController } from "../controllers/orders.controller";
import { validateOrder } from "../validators/orders.validator";

const router = Router();
/**
 * http://localhost:3000/api/orders
 */
router.use(checkJwt);

router.get("/", OrderController.findAll);
router.post("/", validateOrder, OrderController.create);

router.get("/:id", OrderController.findOne);
router.patch("/:id", OrderController.update);

router.delete("/item/:id", OrderController.deleteItem);

export default router;
