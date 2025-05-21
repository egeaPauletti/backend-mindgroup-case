import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import registerRoute from "./routes/registerRoute";
import loginRoute from "./routes/loginRoute";

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API rodando!!! 🚀");
});

app.use("/api/auth", registerRoute);
app.use("/api/auth", loginRoute);

export default app;
