// recibe peticion http, procesar la informacion y enviar al controlador
const express=require('express');
const response= require('../../network/response');//traer modulo local
const controller = require('./controller');
const router=express.Router();


router.get('/',function(req,res){
    response.success(req,res,'lista de mensajes');// va al modulo response,accede a success y lleva req y res
});
router.post('/',function(req,res){

    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage)=>{
            response.success(req,res,fullMessage, 200);
        })
        .catch(e=>{
            response.error(req,res,'Info invalida',400, 'Error en el controller')
        });

});

module.exports=router;