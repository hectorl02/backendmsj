const mongoose =require('mongoose');

const Schema=mongoose.Schema;

const mySchema= new Schema({
    name:String
});

const model = mongoose.model('User', mySchema);//(coleccion => tablas, esquema)
module.exports=model;