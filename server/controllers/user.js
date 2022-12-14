//CONTROLADOR DE LOS USUARIOS
const bcrypt = require('bcrypt-nodejs');
const jwt = require('../services/jwt');
const User = require('../models/user');

function signUp(req, res){
    const user=new User();
    const{name,lastname,email,password,repeatPassword}=req.body;
    user.name=name;
    user.lastname=lastname;
    user.email=email;
    user.role="comprador";
    user.active="true";

    if(!password||!repeatPassword){
        res.status(404).send({message:"Las contraseñas son obligatorias."});
    }
    else{
        if (password!=repeatPassword) {
            res.status(404).send({message:"Las contraseñas tienen que ser iguales."});
        }
        else{
            bcrypt.hash(password,null,null,function (err,hash) {
                if (err) {
                    res.status(500).send({message:"Error al encriptar la contraseña."});
                }
                else{
                    //res.status(200).send({message:hash});
                    user.password=hash;
                    //GUARDANDOLO EN LA BASE DE DATOS CON SAVE
                    user.save((err,userStored)=>{
                        if (err) {
                            res.status(500).send({message:"El usuario ya existe"});
                            
                        } else {
                            if (!userStored) {
                                res.status(404).send({message:"Error al crear el usuario."});
                                
                            }else{
                                res.status(200).send({user:userStored});
                            }
                            
                        }

                    });
                }
            })
        }
    }
}

function signIn(req,res){
    const params=req.body;
    const email=params.email;
    const password=params.password;

    User.findOne({email},(err,userStored)=>{
        if (err) {
            res.status(500).send({message:"Error del servidor."});            
        }
        else{
            if (!userStored) {
                res.status(404).send({message:"Usuario no encontrado."});   
            }else{
                bcrypt.compare(password,userStored.password,(error, check)=>{
                    if (err) {
                        res.status(500).send({message:"Error del servidor."})  
                    }else if(!check){
                        res.status(404).send({message:"La contraseña es incorrecta."})

                    }
                    else{
                        if (!userStored.active) {
                            res.status(200).send({code:200,message:"El usuario no se ha activado."});
                        }
                        else{
                            res.status(200).send({
                                accessToken:jwt.createAccessToken(userStored),
                                refreshToken: jwt.createRefreshToken(userStored)
                            })
                        }
                    }

                })

            }
        }

    });
}

module.exports={
    signUp,
    signIn
};
