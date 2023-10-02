import { Router } from "express";
import { checkJwt } from "../middlewares/session";
import { CustomerController } from "../controllers/customers.controller";
import { validateCustomer } from "../validators/customers.validator";

const router = Router();
/**
 * http://localhost:3000/api/customers
 */
router.use(checkJwt);

router.get("/", CustomerController.findAll);
router.post("/", validateCustomer, CustomerController.create);

router.get("/:id", CustomerController.findOne);
router.put("/:id", validateCustomer, CustomerController.update);

export default router;
