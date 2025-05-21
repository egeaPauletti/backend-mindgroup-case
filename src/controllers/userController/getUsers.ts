import { RequestHandler } from "express";
import db from "../../config/db";

export const getUsers: RequestHandler = async (_, res) => {
  const q = "SELECT * FROM User";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.status(200).json(data);
  });
};
