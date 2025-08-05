import { Router } from "express";
import {
  loginController,
  registerController,
} from "~/controllers/auth.controller";
import { wrapAsync } from "~/utils/handler";

const authRouter = Router();

authRouter.post("/register", wrapAsync(registerController));
authRouter.post("/login", wrapAsync(loginController));

export default authRouter;
