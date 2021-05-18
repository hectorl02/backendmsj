const Model=require('./model');

//funcion para add msj
function addMessage(message){
    const myMessage = new Model(message);
    myMessage.save();
}

// funcion para listar msj
async function getMessages(filterUser){ // func asincrona
    return new Promise((resolve, reject) =>{
        let filter={};
        if (filterUser !== null){
            filter={user : filterUser};
        }
        Model.find(filter)
        .populate('user')
        .exec((error,populated)=>{
            if(error){
                reject(error);
                return false;  
            }
            resolve(populated);
        });
    });  
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