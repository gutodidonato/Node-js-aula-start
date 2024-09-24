import express from "express";

const app = express();
app.use(express.json());


const livros = [
    {
        id: 1,
        titulo: "O Senhor dos Anéis",
    },
    {
        id: 2,
        titulo: "O Hobbit"
    }
]

app.get("/livros", (req, res)=>{
    res.status(200).json(livros);
})

app.post("/inserir_livros", (req, res)=>{
    const novoLivro = req.body;
    livros.push(novoLivro);
    res.status(201).json(novoLivro);
})

app.get("/livro/:id", (req, res)=>{
    const livro = livros.find(livro => 
                            livro.id === Number(req.params.id));
    if(livro){
        res.status(200).json(livro);
    }
    else{
        res.status(404).send("Errou")
    }
})

app.put("/alterar_livro/:id", (req,res)=>{
    const livro = livros.find(livro => 
                livro.id === Number(req.params.id));
    if (livro){
        livros[Number(req.params.id)].titulo = req.body.titulo;
        res.status(200).json(livro);
    }
})

export default app;