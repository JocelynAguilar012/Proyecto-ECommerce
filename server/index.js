//importando mongoose
const mongoose=require("mongoose");
//importando app
const app=require("./app");
//importando puerto
const port=process.env.PORT||3977;
//importaciones de config.js
const {API_VERSION,IP_SERVER,PORT_DB}=require("./config");

//mongoose.set("useFindAndModify", false);
//conexion a la base de datos
//en /registros es el nombre de la base de datos
mongoose.connect(
    `mongodb://${IP_SERVER}:${PORT_DB}/registros`,
{useNewUrlParser:true,useUnifiedTopology:true},
(err,res) => {
    if(err){
        throw err;
    }
    else{
        console.log("la conexion a la base de datos es correcta.");

        app.listen(port,() => {
           console.log("######################");
           console.log("###### API REST<3 ######"); 
           console.log("######################");
           console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}/`);
        })
    }
});
