import { Router } from "express";
import { login } from "../controllers/userController/login";
import { register } from "../controllers/userController/register";
import { getUsers } from "../controllers/userController/getUsers";

const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);

authRouter.get("/users", getUsers);

export default authRouter;
