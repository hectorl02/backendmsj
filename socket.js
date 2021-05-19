//inicializa servidor so socket io,generar instancia y compartir

const sokectIO=require('socket.io');
const socket={};//se guarda como objeto para tener la referencia

function connect(server){
    socket.io=sokectIO(server);//se inicializa io dentro de la varible socket
}

module.exports={
    connect,
    socket,
}