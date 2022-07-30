import React, {useState} from 'react';
import {Toaster,toast} from 'react-hot-toast';
import '../../stylesheets/style.css'
import {useNavigate} from 'react-router-dom';
import {signInApi} from '../../api/user';
import {REFRESH_TOKEN,ACCESS_TOKEN} from '../../utils/constants';
import {NavbarRegistered} from '../../ui/components/NavbarRegistered'



//CON ESTA FUNCION PODEMOS RETORNAR AL NUEVO NABVAR DESPUES DE HABER INICIADO SESION
export const Login = () => {
    
  const navigate=useNavigate();

  const onCreate=async()=>{
  navigate('/CrearUsuario',{
      replace:true
  });
}

const [inputs, setInputs] = useState({
  email:"",
  password:""
});
const changeForm=e=>{
  setInputs({
    ...inputs,
    [e.target.name]:e.target.value
  });

}
const Login =async(e)=>{
  e.preventDefault();
  const result=await signInApi(inputs);
  if (result.message) {
  toast.error("Error, revise si sus credenciales son correctas");
  }else{
    const{accessToken,refreshToken}=result;
    localStorage.setItem(ACCESS_TOKEN,accessToken);
    localStorage.setItem(REFRESH_TOKEN,refreshToken);
    window.location.href="/inicio/usuario";
  }
  console.log(result);
}

  
    return (
   
      <div className='hero'>
      <form action="" onChange={changeForm} onSubmit={Login}>
			<br/>
			<h1>Iniciar sesión</h1>
			<br/>
			<div className='input-group'>
			<input name='email' type="email" id="email" placeholder="Ej: usuario@correo.com" required/>
			<label htmlFor='email'>Correo electrónico</label>
			</div>
			
			<div className='input-group'>
			<input name='password' type="password" id="password" required/>
			<label htmlFor="password">Contraseña</label>
			</div>
			
			<button type="submit"
      >Ingresar</button>

			<div className='link-crear'>
        <u onClick={onCreate}>Crear cuenta</u>
			</div>
    </form>
    <Toaster position='top-center'/>
    </div>
  )
    }
