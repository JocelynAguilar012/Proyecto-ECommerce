const mongoose = require('mongoose');
const Schema=mongoose.Schema;

//MODELO DEL USUARIO, LO QUE TENDRA EL USUARIO
const userSchema=Schema({
    name:String,
    Lastname: String,
    email:{
        type:String,
        unique:true
    },
    password:String,
    role:String,
    active:Boolean
});

module.exports=mongoose.model("user",userSchema);