const express=require('express'); //paquet para servidores
const router=express.Router()// separa peticiones


var app=express();//inicializa express

// //me va responder desde cualquier ruta
// //una func http tiene req y res
// app.use('/',function(req,res){
//     res.send('hola');
// });

app.use(router);
router.get('/message',function(req,res){
    res.send('lista de mensajes');
});
router.post('/message',function(req,res){
    res.send('mensaje creado');
});

//ejecutar express
app.listen(3000);
console.log('La app esta escuchando en http://localhost:3000');