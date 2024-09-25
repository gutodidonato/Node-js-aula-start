import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/busca",  LivroController.listarLivroTitulo);
routes.get("/livro/:id", LivroController.achaLivro);
routes.post("/criar_livro", LivroController.cadastraLivro);
routes.put("/atualizar_livro/:id", LivroController.atualizarLivro);
routes.delete("/deletar_livro/:id", LivroController.deletarLivro);


export default routes;