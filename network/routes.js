//modularizar el router
const express=require('express');
const message= require('../components/message/network');
const user= require('../components/user/network');
const chat= require('../components/chat/network');


//func q añada todas la rutas
// cada vez que llamen a message, se llame el componente de message
const routes=function(server){
    server.use('/message', message);
    server.use('/user',user);
    server.use('/chat',chat);
}
module.exports=routes;