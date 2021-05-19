const express=require('express'); //paquet para servidores
const app=express();//inicializa express
const server = require('http').Server(app);//inicia servidor de socket
const bodyParser=require('body-parser');//para trabajar con el body de la peticion
const socket = require('./socket');// traemos socket

const db = require('./bd');
//const router= require('./components/message/network');// se trae router
const router =require('./network/routes')


db('mongodb+srv://hector:hola1234@cluster0.ra7in.mongodb.net/messages_db?retryWrites=true&w=majority');


// //me va responder desde cualquier ruta
// //una func http tiene req y res
// app.use('/',function(req,res){
//     res.send('hola');
// });

app.use(express.json());
app.use(express.urlencoded({
    extended:false
}));

// usa los midleware de express
//app.use(router);

// pasarle el servidor de express q creamos al router
// parq q cree todas la rutas necesarias
socket.connect(server);//servidor de socket connectado

router(app);

//servidor de estaticos
app.use('/app',express.static('public'));

//ejecutar express
app.listen(3000, function(){// se hace callback para asegurarse q esta escuchando
    console.log('La app esta escuchando en http://localhost:3000');
});