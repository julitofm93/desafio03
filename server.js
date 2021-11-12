const express = require ('express')
const Contenedor = require ('./classes/contenedor');
const app = express();
const PORT = process.env.PORT||8080;

const contenedor = new Contenedor();

const server = app.listen(PORT, ()=> {
    console.log('Servidor escuchando en: '+PORT)
})


app.get('/',(req,res)=>{
    res.send('Hola Mundo');
})

app.get('/productos', (req,res)=>{
    contenedor.getAll().then(result=>{
        res.send(result)
    })
})

app.get('/productoRandom', (req,res)=>{
    contenedor.getRandom().then(result=>{
        res.send(result)
    })
})


/* app.get('/productos/:uid', (req,res)=>{
    const userID = req.params.uid;
    contenedor.getById(userID).then(result=>{
        res.send(result)
    })
}) */