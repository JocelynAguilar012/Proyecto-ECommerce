const express = require('express');
const cartController=require("../controllers/cart");

const api=express.Router(); //para generar ruta

//endpoint
api.post("/insert-products",cartController.addProductCart);

module.exports=api;