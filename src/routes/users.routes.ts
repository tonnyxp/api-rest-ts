import { Router } from "express";
import { UserController } from "../controllers/users.controller";
import { checkJwt } from "../middlewares/session";
import { validateUser } from "../validators/users.validator";

const router = Router();
/**
 * http://localhost:3000/api/users
 */
router.use(checkJwt);

router.get("/", UserController.getItems);

router.get("/:id", UserController.getItem);
router.put("/:id", validateUser, UserController.updateItem);
router.delete("/:id", UserController.deleteItem);

export default router;
