import React from 'react';
import useAuth from '../../hooks/useAuth';
import '../../stylesheets/homePage.css';
import P1 from '../../assets/Promo/P1.png';
import P2 from '../../assets/Promo/P2.jpg';
import P3 from '../../assets/Promo/P3.jpg';
import P4 from '../../assets/Promo/P4.jpg';
import LN1 from '../../assets/Lonuevo/LN1.png';
import LN2 from '../../assets/Lonuevo/LN2.png';
import LN3 from '../../assets/Lonuevo/LN3.png';
import LN4 from '../../assets/Lonuevo/LN4.jpg';


export const Homepage = () => {
    const user=useAuth().user;
    const {name}=user;

  return (
    <>
    <div className='w'>
    <h2 className='welcome'>¡Bienvenid@ {name}!</h2>
    <p className='nk'>Al increible mundo de Nike. Estas a un paso de realizar tu compra, a continuacion te mostraremos algunos beneficios que tenemos para ti:</p>
    </div>
    <div className='containerPromo'>
      <h1 className='hpromos'>Promociones proximas:</h1>
    </div>
    <div className='containerCards'>
      <div className='card-shoes'>
        <figure>
          <img src={P1} alt="" />
        </figure>
        <div className='contentCard'>
          <h3>Nike Air Max</h3>
          <p>Obten el 35% de descuento al pagar con tu tarjeta cuscatlan.</p>
          <p>Inicio:01/08/22</p>
          <p>Fin:20/08/22</p>
        </div>
      </div>
      <div className='card-shoes'>
        <figure>
          <img src={P2} alt="" />
        </figure>
        <div className='contentCard'>
          <h3>Nike Air Max</h3>
          <p>Obten el 35% de descuento al pagar con tu tarjeta cuscatlan.</p>
          <p>Inicio:01/08/22</p>
          <p>Fin:20/08/22</p>
        </div>
      </div>
      <div className='card-shoes'>
        <figure>
          <img src={P3} alt="" />
        </figure>
        <div className='contentCard'>
          <h3>Nike air zoom revive</h3>
          <p>Obten el 40% de descuento al pagar con tu tarjeta cuscatlan.</p>
          <p>Inicio:01/08/22</p>
          <p>Fin:20/08/22</p>
        </div>
      </div>
      <div className='card-shoes'>
        <figure>
          <img src={P4} alt="" />
        </figure>
        <div className='contentCard'>
          <h3>Nike Renew Arena femenino</h3>
          <p>Obten el 20% de descuento al pagar con tu tarjeta cuscatlan.</p>
          <p>Inicio:01/08/22</p>
          <p>Fin:20/08/22</p>
        </div>
      </div>
    </div>
    <div className='containerPromo'>
      <h1 className='hpromos'>Proximamente:</h1>
    </div>
    <div className='containerCards'>
      <div className='card-shoes'>
        <figure>
          <img src={LN1} alt="" />
        </figure>
        <div className='contentCard'>
          <h3>Nike flex runner</h3>
          <p>$85.90</p>
          <p>En venta:10/08/22</p>
        </div>
      </div>
      <div className='card-shoes'>
        <figure>
          <img src={LN2} alt="" />
        </figure>
        <div className='contentCard'>
          <h3>Nike air zoom</h3>
          <p>$69.99</p>
          <p>En venta:10/08/22</p>
        </div>
      </div>
      <div className='card-shoes'>
        <figure>
          <img src={LN3} alt="" />
        </figure>
        <div className='contentCard'>
          <h3>Nike running</h3>
          <p>$105.50</p>
          <p>En venta:10/08/22</p>
        </div>
      </div>
      <div className='card-shoes'>
        <figure>
          <img src={LN4} alt="" />
        </figure>
        <div className='contentCard'>
          <h3>Nike falsh</h3>
          <p>$150.00</p>
          <p>En venta:10/08/22</p>
        </div>
      </div>
    </div>
 
    </>
  )
}
