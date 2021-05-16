//crea funciones necesarias//

const store=require('./store');


function addMessage(user,message){
    //se trabaja con promesas para verificacion
    return new Promise((resolve, reject)=>{
        if(!user || !message){// si no hay usuario o mensaje,haga:
            console.error('[messageController] No hay Usuario o mensaje');//mostrar donde esta el error
            reject('Los datois son incorrectos');
            return false;//para que no siga ejecutando
        }
        
        const fullMessage={
            user:user,
            message:message,
            date:new Date,
        };    
        store.add(fullMessage);
        resolve(fullMessage);
    });   
}

function getMessages(){
    return new Promise((resolve,reject)=>{
        resolve(store.list());
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

//exportar funcion con unico modulo
module.exports={
    addMessage,
    getMessages,
    updateMessage,
    
}