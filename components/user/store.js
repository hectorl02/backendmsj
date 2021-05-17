const Model =require('./model');

function addUser(user){
    const myUser= new Model(user);
    return myUser.save();
}

async function listUsers(){ // func asincrona
    return Model.find();
    // let filter={};
    // if (filterUser!==null){
    //     filter={user:filterUser};
    // }
    // const users = await Model.find(filter);
    // return users;
}


module.exports ={
    add:addUser,
    list:listUsers
}