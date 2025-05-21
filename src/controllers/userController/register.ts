import { RequestHandler } from "express";
import { registerUser } from "../../services/auth/register.service";

export const register: RequestHandler = async (req, res, next) => {
  try {
    const { name, email, password, imageProfile } = req.body;
    const user = await registerUser({ name, email, password, imageProfile });
    res.status(201).json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
