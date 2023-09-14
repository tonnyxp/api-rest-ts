import { Router } from "express";
import { getAll, getById, update, remove } from "../controllers/users";
import { checkJwt } from "../middlewares/session";

const router = Router();
/**
 * http://localhost:3000/api/users
 */
router.use(checkJwt);

router.get("/", getAll);
router.put("/:id", update);

router.get("/:id", getById);
router.delete("/:id", remove);

export default router;
