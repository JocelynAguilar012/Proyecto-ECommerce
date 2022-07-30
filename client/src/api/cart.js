import {basePath,apiVersion} from './config'

export function addToCart(data){
    const url=`${basePath}/${apiVersion}/insert-products`;
    const params={
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
    };
    //console.log(data);
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
                message:"Producto ingresado correctamente"};        
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