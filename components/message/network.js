// recibe peticion http, procesar la informacion y enviar al controlador
const express=require('express');
const router=express.Router();
const response= require('../../network/respond');//traer modulo local

router.get('/',function(req,res){
    response.success(req,res,'lista de mensajes');// va al modulo response,accede a success y lleva req y res
});
router.post('/',function(req,res){
    console.log(req.body);
    console.log(req.query);
    response.success(req,res,'mensaje creado');
});

module.exports=router;