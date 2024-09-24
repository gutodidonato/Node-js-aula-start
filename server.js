import app from "./src/app.js"

const PORT = 3000;

const rotas = {
    "/": "Curso de Node.js"
}




app.listen(PORT, ()=>{
    console.log("Server running on port 3000");
});