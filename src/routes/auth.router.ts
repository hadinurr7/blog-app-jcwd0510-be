import { Router } from "express";
import {
  loginController,
  registerController,
} from "../controllers/auth.controller";
import {
  validateForgotPassword,
  validateLogin,
  validateRegister,
} from "../validators/auth.validator";

const router = Router();

router.post("/register", validateRegister, registerController);
router.post("/login", validateLogin, loginController);
router.post("/forgot-password", validateForgotPassword, loginController);

export default router;
