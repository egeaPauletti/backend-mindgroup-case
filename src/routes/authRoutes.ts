import { Router } from "express";
import { login } from "../controllers/userController/login";
import { register } from "../controllers/userController/register";

const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);

export default authRouter;
