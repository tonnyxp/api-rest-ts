import { Router } from "express";
import { checkJwt } from "../middlewares/session";
import { StoreController } from "../controllers/stores.controller";
import { validateStore } from "../validators/stores.validator";

const router = Router();
/**
 * http://localhost:3000/api/stores
 */
router.use(checkJwt);

router.get("/", StoreController.findAll);
router.post("/", validateStore, StoreController.create);

router.get("/:id", StoreController.findOne);
router.put("/:id", validateStore, StoreController.update);
router.delete("/:id", StoreController.remove);

export default router;
