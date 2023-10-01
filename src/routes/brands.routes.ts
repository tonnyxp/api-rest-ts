import { Router } from "express";
import { checkJwt } from "../middlewares/session";
import { BrandController } from "./../controllers/brands.controller";
import { validateBrand } from "../validators/brands.validator";

const router = Router();
/**
 * http://localhost:3000/api/brands
 */
router.use(checkJwt);

router.get("/", BrandController.findAll);
router.post("/", validateBrand, BrandController.create);

router.get("/:id", BrandController.findOne);
router.put("/:id", validateBrand, BrandController.update);
router.delete("/:id", BrandController.remove);

export default router;
