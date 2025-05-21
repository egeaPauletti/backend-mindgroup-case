import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import authRouter from "./routes/authRoutes";
import articleRouter from "./routes/articleRoutes";
import path from "path";

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API rodando!!! 🚀");
});

app.use(express.static(path.resolve("public")));
app.use("/api/auth", authRouter);
app.use("/articles", articleRouter);

export default app;
