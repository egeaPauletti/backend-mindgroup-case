// src/routes/articleRoutes.ts
import { Router } from "express";
import {
  createArticle,
  getAllArticles,
  getArticleById,
  updateArticle,
  deleteArticle,
} from "../controllers/articlesController/articleController";

const articleRouter = Router();

articleRouter.post("/", createArticle);
articleRouter.get("/", getAllArticles);
articleRouter.get("/:id", getArticleById);
articleRouter.put("/:id", updateArticle);
articleRouter.delete("/:id", deleteArticle);

export default articleRouter;
