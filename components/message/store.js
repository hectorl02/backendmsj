const Model=require('./model');

//funcion para add msj
function addMessage(message){
    const myMessage = new Model(message);
    myMessage.save();
}

// funcion para listar msj
async function getMessages(filterUser){ // func asincrona
    let filter={};
    if (filterUser!==null){
        filter={user:filterUser};
    }
    const messages = await Model.find(filter);
    return messages;
}

//func para actualizar
async function updateText(id,message){
    const foundMessage= await Model.findOne({
        _id:id,
    });
    foundMessage.message = message;

    const newMessage = await foundMessage.save();
    return newMessage;
}


// func para eliminar
function removeMessage(id){
    return Model.deleteOne({
        _id: id
    });
}

module.exports={
    add:addMessage,
    list:getMessages,
    updateText : updateText,
    remove: removeMessage
}