import prisma from "../../prisma";
import { Request, Response } from "express";

// Create article
export const createArticle = async (req: Request, res: Response) => {
  const { title, content, image, authorId } = req.body;
  try {
    const article = await prisma.article.create({
      data: { title, content, image, authorId },
    });
    res.status(201).json(article);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: "Erro desconhecido" });
    }
  }
};

// Get all articles
export const getAllArticles = async (req: Request, res: Response) => {
  try {
    const articles = await prisma.article.findMany({
      include: { author: true },
    });
    res.json(articles);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: "Erro desconhecido" });
    }
  }
};

// Get article by ID
export const getArticleById = async (
  req: Request,
  res: Response
): Promise<Response | any> => {
  const { id } = req.params;
  try {
    const article = await prisma.article.findUnique({
      where: { id: parseInt(id) },
      include: { author: true },
    });

    if (!article) {
      return res.status(404).json({ error: "Artigo não encontrado" });
    }

    return res.json(article);
  } catch (err: unknown) {
    if (err instanceof Error) {
      return res.status(500).json({ error: err.message });
    } else {
      return res.status(500).json({ error: "Erro desconhecido" });
    }
  }
};

// Update article
export const updateArticle = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content, image } = req.body;
  try {
    const article = await prisma.article.update({
      where: { id: parseInt(id) },
      data: { title, content, image },
    });
    res.json(article);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: "Erro desconhecido" });
    }
  }
};

// Delete article
export const deleteArticle = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.article.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: "Artigo deletado com sucesso" });
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: "Erro desconhecido" });
    }
  }
};
