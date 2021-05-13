const express=require('express'); //paquet para servidores
var app=express();//inicializa express

//me va responder desde cualquier ruta
//una func http tiene req y res
app.use('/',function(req,res){
    res.send('hola');
});
//ejecutar express
app.listen(3000);
console.log('La app esta escuchando en http://localhost:3000');