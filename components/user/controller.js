const store= require('./store');

function addUser(name){
    if(!name){
        return Promise.reject('Invalid name');// devuelve una promesa rechazada
    }    
    const user={
        name,
    };
    return store.add(user);// se devuelve promesa
}

function listUsers(){
    return store.list();
    // return new Promise((resolve,reject)=>{
    //     resolve(store.list(filterUser));
    // })   // devolver promesa
}

module.exports ={
    addUser,
    listUsers,
}