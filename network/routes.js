//modularizar el router
const express=require('express');
const message= require('../components/message/network')

//func q añada todas la rutas
// cada vez que llamen a message, se llame el componente de message
const routes=function(server){
    server.use('/message', message)
}
module.exports=routes;