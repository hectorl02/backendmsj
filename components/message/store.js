const db =require('mongoose');
const Model=require('./model');

db.Promise=global.Promise;// promesas globales
const url='mongodb+srv://hector:hola1234@cluster0.ra7in.mongodb.net/messages_db?retryWrites=true&w=majority';
db.connect(url,{useNewUrlParser:true,
useUnifiedTopology:true });
console.log('[db] conectada con exito');

//funcion para add msj
function addMessage(message){
    const myMessage = new Model(message);
    myMessage.save();
}

// funcion para listar msj
async function getMessages(){ // func asincrona
    const messages = await Model.find();
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

module.exports={
    add:addMessage,
    list:getMessages,
    updateText : updateText,
}