//archivo para gestionar la conexion
const db =require('mongoose');

db.Promise=global.Promise;// promesas globales
async function connect(url){// con async y await nos aseguramos q se conecto correctamente
    await db.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true 
    });
    console.log('[db] conectada con exito');
}

module.exports=connect;