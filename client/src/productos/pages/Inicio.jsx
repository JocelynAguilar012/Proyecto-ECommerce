import React from 'react'
import t1 from '../../assets/carousel/t1.jpg';
import t2 from '../../assets/carousel/t2.png';
import t3 from '../../assets/carousel/t3.jpeg';
import los from '../../assets/carousel/los.png';
//import mu2 from '../../assets/carousel/m2.jpg';
import calidad from '../../assets/ventajas/calidad.jpg';
import money from '../../assets/ventajas/money.jpg';
import envios from '../../assets/ventajas/envios.png';
import LmV from '../../assets/carousel/LmV.jpg';
import LmV2 from '../../assets/carousel/LmV2.jpg';
import '../../stylesheets/home.css';



export const Inicio = () => {
  const hBuy=()=>{
    window.location.href="/how-to-buy"
}
  return (
    <>
    <div id="carouselExampleControls" className="carousel slide mt-4" data-bs-ride="carousel" >
   <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={los} className="d-block w-100" height={"500px"} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={t1} className="d-block w-100" height={"500px"} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={LmV} className="d-block w-100" height={"500px"} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={t2} className="d-block w-100" height={"500px"} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={t3} className="d-block w-100" height={"500px"} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={LmV2} className="d-block w-100" height={"500px"} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className='buy-withus'>
  <h1 className='h1-buy'>Ventajas de tu compra:</h1>
</div>
<div className='cardss'>
<div className='card-advan'>
  <div className='face front'>
    <img src={envios} alt="" />
    <h3>Entregas inmediatas</h3>
  </div>
  <div className='face back'>
  <h3>Entregas inmediatas</h3>
  <p>¿Cansado de entregas tardias?</p>
  <p>Contamos con las entregas mas seguras e inmediatas del pais, con personal altamente capacitado.</p>
  </div>
</div>
<div className='card-advan'>
  <div className='face front'>
    <img src={money} alt="" />
    <h3>Mejores precios</h3>
  </div>
  <div className='face back'>
  <h3>Mejores precios</h3>
  <p>¿Buscas buena calidad a un buen precio?</p>
  <p>En nuestros diferentes catalogos encontraras una gran variedad de tenis, incluyendo los mas recientes, todos estos al mejor precio del mercado.</p>
  </div>
</div>
<div className='card-advan'>
  <div className='face front'>
    <img src={calidad} alt="" />
    <h3>Mejor calidad</h3>
  </div>
  <div className='face back'>
  <h3>Mejor calidad</h3>
  <p>¿Buscas calidad?</p>
  <p>Contamos con zapatos 100% originales, garantizandote duracion y estilo al mejor precio.</p>
  </div>
</div>
</div>
<div className='how-to-buy'>
  <u className='how' onClick={hBuy}>¿como comprar?</u>
</div>
    </>
  )
}
