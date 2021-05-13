const express=require('express'); //paquet para servidores
const bodyParser=require('body-parser');//para trabajar con el body de la peticion
const response= require('.///network/respond');//traer modulo local
const router=express.Router()// separa peticiones


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
app.use(router);

router.get('/message',function(req,res){
    response.success(req,res,'lista de mensajes');// va al modulo response,accede a success y lleva req y res
});
router.post('/message',function(req,res){
    console.log(req.body);
    console.log(req.query);
    response.success(req,res,'mensaje creado');
});

//servidor de estaticos
app.use('/app',express.static('public'));


//ejecutar express
app.listen(3000);
console.log('La app esta escuchando en http://localhost:3000');