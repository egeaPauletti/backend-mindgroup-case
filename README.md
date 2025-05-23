# 📚 Blog API - Backend

Este é o backend de um site de blog, desenvolvido com **Node.js** e **Express**, utilizando **Prisma ORM** para interação com um banco de dados **MySQL**. A aplicação oferece funcionalidades completas de **CRUD para artigos**, além de **sistema de autenticação de usuários** com **JWT (JSON Web Token)**.

---

## 🚀 Tecnologias Utilizadas

- **Node.js** — Ambiente de execução JavaScript
- **Express** — Framework minimalista para aplicações web
- **Prisma ORM** — ORM para modelagem e manipulação do banco de dados
- **MySQL** — Banco de dados relacional
- **JWT** — Autenticação baseada em tokens
- **Bcrypt** — Criptografia de senhas

---

## ⚙️ Funcionalidades

### ✅ Autenticação
- Cadastro de usuário com criptografia de senha.
- Login de usuário com geração de token JWT.

## ✅ CRUD de Artigos
- **Create**: Criar novos artigos.
- **Read**: Listar todos os artigos ou consultar artigo por ID.
- **Update**: Atualizar informações de um artigo.
- **Delete**: Excluir um artigo.
-  Rotas Principais

##📌 Autenticação

- POST /auth/register — Cadastro de usuário
- POST /auth/login — Login de usuário
- 
##📌 Artigos

- GET /articles — Listar todos os artigos
- GET /articles/:id — Buscar artigo por ID
- POST /articles — Criar novo artigo (autenticado)
- PUT /articles/:id — Atualizar artigo (autenticado)
- DELETE /articles/:id — Excluir artigo (autenticado)
