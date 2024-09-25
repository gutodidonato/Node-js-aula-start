import express from "express";
import conectaBanco from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaBanco();

conexao.on("error", (erro)=>{
    console.log(erro);
})

conexao.once("open", ()=>{
    console.log("Conectado ao banco de dados");
})

const app = express();
routes(app);

export default app;


