import mongoose from "mongoose";
import pass from "./pass.js";

async function conectaBanco() {
    let termo = `mongodb+srv://${pass[1]}:${pass[0]}@cluster0.nbr1c.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0`
    console.log(termo)
    mongoose.connect(termo)
    return mongoose.connection;
};

export default conectaBanco;

