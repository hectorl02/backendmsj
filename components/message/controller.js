//crea funciones necesarias//

const socket = require('../../socket').socket;
const store=require('./store');


function addMessage(chat, user,message, file){
    //se trabaja con promesas para verificacion
    return new Promise((resolve, reject)=>{
        if(!chat || !user || !message){// si no hay usuario o mensaje,haga:
            console.error('[messageController] No hay Usuario o mensaje o chat');//mostrar donde esta el error
            reject('Los datois son incorrectos');
            return false;//para que no siga ejecutando
        }
        
        let fileUrl='';
        if(file){
            fileUrl='http://localhost:3000/app/files/'+file.filename;
        }

        const fullMessage={
            chat:chat,
            user:user,
            message:message,
            date:new Date,
            file:fileUrl,
        };    
        store.add(fullMessage);

        socket.io.emit('message',fullMessage);

        resolve(fullMessage);
    });   
}

function getMessages(filterUser){
    return new Promise((resolve,reject)=>{
        resolve(store.list(filterUser));
    })   // devolver promesa
}

function updateMessage(id,message){
    return new Promise(async (resolve,reject)=>{
        if(!id || !message){
            reject('Invalida data');
            return false;
        }
        const result =await store.updateText(id,message);
        resolve(result)
    })
}

function deleteMessage(id){
    return new Promise((resolve,reject) => {
        if(!id){
            reject('Id invalido');
            return false;
        }
        store.remove(id)
            .then(() => {
                resolve();
            })
            .catch(e=>{
                reject(e);
            })
    })
}

//exportar funcion con unico modulo
module.exports={
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage,
    
}