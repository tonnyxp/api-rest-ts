import { Router } from "express";
import {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/users";

const router = Router();
/**
 * http://localhost:3000/api/items
 */
router
  .get("/", getItems)
  .get("/:id", getItem)
  .post("/", createItem)
  .put("/:id", updateItem)
  .delete("/:id", deleteItem);

export default router;
