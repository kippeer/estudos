const porta = 3003

const bodyParser = require('body-parser')
const express = require('express')

const app = express()

const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({extended:true}))

app.get('./produtos',(req,res,next)=>{
   res.send(bancoDeDados.getProdutos())
    next()
}) 


app.get('./produtos',(req,res,next)=>{
    res.send({nome:'Notebook',preco:123.45})
}) 

app.get('./produtos/:id',(req,res,next)=>{
    res.send(bancoDeDados.getProdutos(req.params.id))
})



app.post('./produtos', (req,res,next) =>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.listen(porta,()=>{
    console.log(`servidor executando na ${porta}`)
})