import express from "express";
import autorController from "../controllers/autorController.js";

const routes = express.Router();

routes.get("/autores", autorController.listarAutores);
routes.get("/autor/:id", autorController.achaAutor);
routes.post("/criar_autor", autorController.cadastraAutor);
routes.put("/atualizar_autor/:id", autorController.atualizarAutor);
routes.delete("/deletar_autor/:id", autorController.deletarAutor);

export default routes;