//ACA SE GUARDARAN TODAS LAS FUNCIONES PARA CONECTAR CON LOS ENDPOINTS
import {basePath,apiVersion} from './config';

export function signUpApi(data){
    const url=`${basePath}/${apiVersion}/sign-up`;
    const params={
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
    };
    
    //USANDO FETCH
    return fetch(url,params)
    .then(response=>{
        return response.json();
        //console.log(response);
    })
    .then(result=>{
        //console.log(result);
        if (result.user) {
            return {
                ok:true,
                message:"Usuario creado correctamente"};        
        }
        return{
           ok:false,
           message:result.message
        };
    })
    .catch((err)=>{
        return{
            ok:false,
            message:err.message
         };
    })
 
}

export function signInApi(data){
    const url=`${basePath}/${apiVersion}/sign-in`;
    const params={
        method:"POST",
        body: JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
    };
    return fetch(url,params)
    .then(response=>{
        //console.log(response);
        return response.json();
    })
    .then(result=>{
        console.log(result);
        return result;
    })
    .catch(err=>{
        return err.message;
    });
}