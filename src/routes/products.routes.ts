import { Router } from "express";
import { checkJwt } from "../middlewares/session";
import { ProductController } from "../controllers/products.controller";
import { validateProduct } from "../validators/products.validator";

const router = Router();
/**
 * http://localhost:3000/api/products
 */
router.use(checkJwt);

router.get("/", ProductController.findAll);
router.post("/", validateProduct, ProductController.create);

router.get("/:id", ProductController.findOne);
router.put("/:id", validateProduct, ProductController.update);
router.delete("/:id", ProductController.remove);

export default router;
