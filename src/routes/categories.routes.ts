import { Router } from "express";
import { checkJwt } from "../middlewares/session";
import { CategoryController } from "../controllers/categories.controller";
import { validateCategory } from "../validators/categories.validator";

const router = Router();
/**
 * http://localhost:3000/api/categories
 */
router.use(checkJwt);

router.get("/", CategoryController.findAll);
router.post("/", validateCategory, CategoryController.create);

router.get("/:id", CategoryController.findOne);
router.put("/:id", validateCategory, CategoryController.update);
router.delete("/:id", CategoryController.remove);

export default router;
