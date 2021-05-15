const list=[];//guardar los msg

//funcion para add msj
function addMessage(message){
    list.push(message);
}

// funcion para listar msj
function getMessage(){
    return list;
}

module.exports={
    add:addMessage,
    list:getMessage
}