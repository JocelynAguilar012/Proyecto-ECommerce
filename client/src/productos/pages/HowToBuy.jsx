import React from 'react';
import HB1 from '../../assets/howToBuy/HB1.PNG'
import HB2 from '../../assets/howToBuy/HB2.PNG'
import HB3 from '../../assets/howToBuy/HB3.PNG'
import HB4 from '../../assets/howToBuy/HB4.PNG'
import HB5 from '../../assets/howToBuy/HB5.PNG'
import HB6 from '../../assets/howToBuy/HB6.PNG'
import "../../stylesheets/howToBuy.css"

export const HowToBuy = () => {
  return (
    <>
    <div className='Create-account'><h1>Paso 1:Crear cuenta</h1></div>
    <ul>
    <li><p className='pb'>Haz click en el boton de log in.</p></li>
    <img src={HB1} alt="" />
    <br /><br />
    <li><p className='pb'>El la parte posterior del login encontraras una opcion de crear cuenta, click ahi.</p></li>
    <img src={HB3} alt="" />
    <br /><br />
    <li><p className='pb'>Ingresa tus datos, todos los campos son requeridos.</p></li>
    <img src={HB4} alt="" />
    </ul>
    <div className='Create-account'><h1>Paso 2:Inicia sesion</h1></div>
    <ul>
    <li><p className='pb'>Ingresa tu correo electrico y tu contraseña definida en el campo anterior</p></li>
    <img src={HB2} alt="" />
    </ul>
    <ul>
    <div className='Create-account'><h1>Paso 3:Realiza tu compra</h1></div>
    <li><p className='pb'>Una vez inicies sesion observaras un mensaje de bienvenida, luego dirigete al catalogo de tu preferencia
     Selecciona tu producto favorito y de click en agregar al carrito.   
    </p></li>
    <img src={HB5} alt="" />
    <li><p className='pb'>Listo a realizado su compra, dentro de la opcion de su carrito de compras podra visualizar su producto, modificarlo y finalizar su compra</p></li>
    <img src={HB6} alt="" />
    </ul>


    </>
  )
}
