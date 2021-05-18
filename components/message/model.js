const mongoose =require('mongoose');

const Schema=mongoose.Schema;

const mySchema= new Schema({
    user:{
        type : Schema.ObjectId,//ObjectId es el conjunto de id q da mongo
        ref : 'User',
    },
    message:{
        type: String,
        require:true,
    },
    date:Date,
});

const model = mongoose.model('Message', mySchema);//(coleccion => tablas, esquema)
module.exports=model;
