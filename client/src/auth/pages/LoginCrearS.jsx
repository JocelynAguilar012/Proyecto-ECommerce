import React, { useState} from 'react';
import {Toaster,toast} from 'react-hot-toast';
import '../../stylesheets/style.css';
import {useNavigate} from 'react-router-dom';
//EXPORTANDO FUNCIONES
import  { emailValidation,minLengthValidation  } from '../../utils/formValidation';
import '../../stylesheets/validacionColor.css';
import{signUpApi} from '../../api/user';


export const LoginCrearS = () => {
	const navigate=useNavigate();
    const back= async()=>{
    /*navigate('/',{
      replace:true
    })  */
	await(window.location.href="/");
}
//aca se guardaran los valores del stado
const [inputs, setinputs] = useState({
	name:"",
	lastname:"",
	email:"",
	password:""
});
const [formValid, setformValid] = useState({
	email:false,
	password:false
});


const changeForm= e=>{

		setinputs({
			...inputs,
			[e.target.name]:e.target.value
		});
}

const inputValidation=e=>{
	//console.log('Validando...');
	const{type, name}=e.target;
	if (type==="email") {
		setformValid({
			...formValid,
			[name]:emailValidation(e.target)
		});
	}
	if (type==="password") {
		setformValid({
			...formValid,
			[name]:minLengthValidation(e.target,6)
		});
		
	}

}


const register=async(e)=>{
	e.preventDefault();
	const passwordVali=inputs.password;
	const repeatPasswordVali=inputs.repeatPassword;
if (passwordVali!==repeatPasswordVali) {
	toast.error("Las contraseñas tienen que ser iguales");
	
}else{
	const result=await signUpApi(inputs);
	//console.log(result);
	if (!result.ok) {
		//window.alert("Error,el usuario ya existe");
		toast.error("El usuario ya existe");
			
	}
	else{
		//window.alert("success, usuario creado");
		toast.success("Usuario creado correctamente");
		//resetForm();
		navigate('/login',{
			replace:true
		  })  
	}
}
};

const resetForm=()=>{
	const input=document.getElementsByTagName('input');
	for (let i= 0; i< inputs.length;i++) {
		inputs[i].classList.remove("success");
		inputs[i].classList.remove("error");
		
	}
	setinputs({
		name:"",
		lastname:"",
		email:"",
		password:"",
		repeatPassword:""
	});
	setformValid({
		email:false,
		password:false
	});
}

  return (
    <div className='hero'>
		<form action="" onSubmit={register} onChange={changeForm}>
			<br/>
			<h1>Crea tu cuenta</h1>
			<br/>

			<div className='input-group'>
			<input name='name' type="text" id="name"
			value={inputs.name} required/>
			<label htmlFor='name'>Nombre</label>
			</div>

			<div className='input-group'>
			<input name='lastname' type="text" id="lastname"
			value={inputs.lastname} required/>
			<label htmlFor="lastname">Apellido</label>
			</div>

			<div className='input-group'>
			<input name='email' type="email" id="email" placeholder="Ej: usuario@correo.com"
			onChange={inputValidation} 
			value={inputs.email} required/>
			<label htmlFor="email">Correo</label>
			</div>
			
			<div className='input-group'>
			<input name='password' type="password" id="password"
			onChange={inputValidation} 
			value={inputs.password} required/>
			<label htmlFor="password">Contraseña</label>
			</div>

			<div className='input-group'>
			<input name='repeatPassword' type="password" id="password"
			value={inputs.repeatPassword} required/>
			<label htmlFor="password">Repite la contraseña</label>
			</div>
			
			<button type="submit">Registrarse</button>

			<div className='link-crear'>
            <u onClick={back}>volver</u>
			</div>
            </form>
			<Toaster position='top-center'/>
            </div>
  )
}
