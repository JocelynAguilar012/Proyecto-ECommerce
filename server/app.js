const express=require("express");
const bodyParse=require("body-parser");

const app=express();
const {API_VERSION}=require('./config');

//load routings
const authRoutes=require('./routers/auth');
const userRoutes=require('./routers/user');
//carrito
const cartRoutes=require('./routers/cart');

app.use(bodyParse.urlencoded({extended: false}));
app.use(bodyParse.json());

//configure header HTTP
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });

//Router Basic
app.use(`/api/${API_VERSION}`,authRoutes);
app.use(`/api/${API_VERSION}`,userRoutes);//USA TODAS LAS RUTAS QUE TENGA DEFINIDO user.js-routes
app.use(`/api/${API_VERSION}`,cartRoutes);

//Exportamos app porque todas las configuraciones estaran dentro de este
module.exports=app;