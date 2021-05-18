const Model=require('./model');

//funcion para add msj
function addChat(chat){
    const myChat = new Model(chat);
    return myChat.save();
}

// funcion para listar msj
function listChats(userId){ // func asincrona
    return new Promise((resolve, reject) =>{
        let filter={};
        if (UserId){
            filter={
                users : userId
            };
        }
        Model.find(filter)
        .populate('users')
        .exec((err,populated)=>{
            if(err){
                reject(err);
                return false;  
            }
            resolve(populated);
        });
    });  
}

module.exports={
    add:addChat,
    list: listChats,
}