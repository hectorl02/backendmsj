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

function getMessage(){
    return new Promise((resolve,reject)=>{
        resolve(store.list());
    })   // devolver promesa
}

//exportar funcion con unico modulo
module.exports={
    addMessage,
    getMessage,
}