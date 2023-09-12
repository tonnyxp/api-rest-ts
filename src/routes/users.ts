import { Router } from "express";
import { getAll, getById, update, destroy } from "../controllers/users";

const router = Router();
/**
 * http://localhost:3000/api/users
 */
router.get("/", getAll);
router.put("/:id", update);

router.get("/:id", getById);
router.delete("/:id", destroy);

export default router;
