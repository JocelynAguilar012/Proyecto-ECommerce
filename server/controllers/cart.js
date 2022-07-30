const Products=require("../models/cart");

function addProductCart(req, res){
    console.log(req.body,"esta es la info");
    Products.insertMany(req.body).then(async data => {if (data) {res.status(202).send({message:'Lo Logramos'});}})

}
module.exports={
    addProductCart
}
