import { Router } from "express";
import { StaffController } from "../controllers/staffs.controller";
import { checkJwt } from "../middlewares/session";
import { validateStaff } from "../validators/staffs.validator";

const router = Router();
/**
 * http://localhost:3000/api/users
 */
router.use(checkJwt);

router.get("/", StaffController.findAll);

router.get("/:id", StaffController.findOne);
router.put("/:id", validateStaff, StaffController.update);

export default router;
