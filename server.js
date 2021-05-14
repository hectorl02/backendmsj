const express=require('express'); //paquet para servidores
const bodyParser=require('body-parser');//para trabajar con el body de la peticion

//const router= require('./components/message/network');// se trae router
const router =require('./network/routes')

var app=express();//inicializa express

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
router(app);

//servidor de estaticos
app.use('/app',express.static('public'));

//ejecutar express
app.listen(3000);
console.log('La app esta escuchando en http://localhost:3000');