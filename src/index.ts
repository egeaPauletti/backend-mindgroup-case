import app from "./app";

const PORT = process.env.PORT || 3000;

const server = async () => {
  try {
    await app.listen(PORT, () =>
      console.log(`Servidor rodando em http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log("server didnt start ", error);
  }
};

server();
