import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";
class LivroController{

    static async listarLivros (req, res){
        try{
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        }
        catch(err){
            res.status(400).json({message: err.message});
    }};

    static async cadastraLivro (req,res){
        const novoLivro = req.body;
        try{
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = { ... novoLivro, autor: { ...autorEncontrado._doc }}
            const adiicionarLivro = await livro.create(livroCompleto);
            res.status(201).json({
                message: "criado com sucesso", livro: novoLivro
            });

        }   
        catch (err){
            res.status(400).json({message: err.message})
        } 
    }
    static async achaLivro(req,res){
        try{
            const id = req.params.id;
            const livroNovo = await livro.findById(id);
            res.status(200).json(livroNovo)
        }
        catch (err){
            res.status(400).json({message: err.message})
        }
    }
    static async atualizarLivro(req,res){ 
    try{
        const id = req.params.id;
        const livroAtualizado = req.body;

        if (livroAtualizado.autor){
            const autorEncontrado = await autor.findById(livroAtualizado.autor);
            if (!autorEncontrado){
                return res.status(404).json({message: "Autor não encontrado"});
            }
            livroAtualizado.autor = { ...autorEncontrado._doc };
        }


        const livroEncontrado = await livro.findByIdAndUpdate(id, livroAtualizado)

        if (!livroEncontrado){
            return res.status(404).json({message: "Autor não encontrado"});
        }
        res.status(200).json("Livro atualizado com sucesso");
        }catch (err){
            res.status(400).json({message: err.message});
        }}

    static async deletarLivro(req,res){
        try{
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message: "Livro deletado com sucesso"});
    } catch (err) {
        res.status(400).json({message: err.message});
    }}

    static async listarLivroTitulo(req,res){
        const editora = req.query.titulo;
        try{
            const livros = await livro.find({ titulo });
            res.status(200).json(livros)
        }catch (err){
            res.status(400).json({message: err.message})
        }
    }
}

export default LivroController;