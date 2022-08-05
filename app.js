const express = require ("express");
let app = express()

let pessoas = [
    {
    id: 1,
    nome:"Glauce",
    sobrenome: "Rocha"
},
{
    id: 2,
    nome: "Rafael",
    sobrenome: "Losinno"
},

]

app.use(express.json())

app.get ("/pessoas", (req, res) => {
    res.send (cachorros)
   
})
app.listen (3000 , ( ) => {
    console.log ("Rodando na porta 3000")

})

