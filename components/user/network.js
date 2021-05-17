const express=require('express');
const response= require('../../network/response');//traer modulo local
const controller = require('./controller');
const router=express.Router();

router.post('/',function(req,res){

    controller.addUser(req.body.name)
        .then(data =>{
            response.success(req,res,data,201);
        })
        .catch(err=>{
            response.error(req,res,'Internal error',500,err);
        });
})

router.get('/',function(req,res){
    // va al modulo response,accede a success y lleva req y res
    //response.success(req,res,'lista de mensajes');
    //const filterUsers = req.query.user || null;
    controller.listUsers()
    .then((users)=>{
        response.success(req,res,users,200);
    })
    .catch(e=>{
        response.error(req,res,'Error Inesperado',500),e;
    })
});

module.exports=router;