import { autor } from "../models/Autor.js";

class autorController{

    static async listarAutores (req, res){
        try{
            const listaautors = await autor.find({});
            res.status(200).json(listaautors);
        }
        catch(err){
            res.status(400).json({message: err.message});
    }};

    static async cadastraAutor (req,res){
        try{
            const novoautor = await autor.create(req.body);
            res.status(201).json({
                message: "criado com sucesso", autor: novoautor
            });

        }   
        catch (err){
            res.status(400).json({message: err.message})
        } 
    }
    static async achaAutor(req,res){
        try{
            const id = req.params.id;
            const autorNovo = await autor.findById(id);
            res.status(200).json(autorNovo)
        }
        catch (err){
            res.status(400).json({message: err.message})
        }
    }
    static async atualizarAutor(req,res){
        try{
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json("autor atualizado com sucesso")
        }
        catch (err){
            res.status(400).json({message: err.message})
        }}

    static async deletarAutor(req,res){
        try{
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({message: "autor deletado com sucesso"});
    } catch (err) {
        res.status(400).json({message: err.message});
    }}
}

export default autorController;