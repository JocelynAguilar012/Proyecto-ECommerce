const mongoose = require('mongoose');
const Schema=mongoose.Schema;

//MODELO DEL CARRITO
const productSchema=Schema({
    user_name:String,
    identificador:String,
    product_name:String,
    qty:Number,
    total_price:Number
});

module.exports=mongoose.model("Cart",productSchema);