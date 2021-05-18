// recibe peticion http, procesar la informacion y enviar al controlador
const express=require('express');
const multer = require('multer');// se encarga de la gestion de archivos
const response= require('../../network/response');//traer modulo local
const controller = require('./controller');
const router=express.Router();

const upload = multer({
    dest: 'public/files/',//guarda los archivos a upload

})

router.get('/',function(req,res){
    // va al modulo response,accede a success y lleva req y res
    //response.success(req,res,'lista de mensajes');
    const filterMessages = req.query.user || null;
    controller.getMessages(filterMessages)
    .then((messageList)=>{
        response.success(req,res,messageList,200);
    })
    .catch(e=>{
        response.error(req,res,'Error Inesperado',500,e);
    })
});

router.post('/',upload.single('file') ,function(req,res){
    
    controller.addMessage(req.body.chat, req.body.user, req.body.message,req.file)
        .then((fullMessage)=>{
            response.success(req,res,fullMessage, 200);
        })
        .catch(e=>{
            response.error(req,res,'Info invalida',400, 'Error en el controller')
        });

});

router.patch('/:id',function(req,res){    
    controller.updateMessage(req.params.id,req.body.message)
        .then((data)=>{
            response.success(req,res,data,200);
        })
        .catch(e=>{
            response.error(req,res,'Error interno',500, e)
        });
})

router.delete('/:id',function(req,res){    
    controller.deleteMessage(req.params.id)
    .then(()=>{
        response.success(req,res,`Usuario ${req.params.id} eliminado`,200);
    })
    .catch(e=>{
        response.error(req, res, 'Error interno', 500, e);
    })
})

module.exports=router;
