import React, { useState } from 'react';
import '../../stylesheets/StyleRegistered.css'
import PageWrapper from '../components/PageWrapper';
import Card from '../components/Card';
import C1 from '../../assets/catalogo/1.png';
import C2 from '../../assets/catalogo/2.png';
import C3 from '../../assets/catalogo/3.png';
import C4 from '../../assets/catalogo/4.png';
import C5 from '../../assets/catalogo/5.png';
import C6 from '../../assets/catalogo/6.png';
import C7 from '../../assets/catalogo/7.png';
import C8 from '../../assets/catalogo/8.png';
import C9 from '../../assets/catalogo/9.png';

export const Product1 = () => {
  let producto = [
    {
      img: < img src={C1} />,
      id: "1",
      titulo: "Air Jordan 1 Low SE",
      precio: "161.56"
    },
    {
      img: < img src={C2} />,
      id: "2",
      titulo: "Air Force 1 Lv8 Emb",
      precio: "117.69"
    },
    {
      img: < img src={C3} />,
      id: "3",
      titulo: "AIR Jordan 1 Low SE",
      precio: "133.74"
    },
    {
      img: < img src={C4} />,
      id: "4",
      titulo: "Nike BlaAir Jordan 1 Lownco",
      precio: "120.90"
    },
    {
      img: < img src={C5} />,
      id: "5",
      titulo: "Air Force 1 Mid",
      precio: "160.49"
    },
    {
      img: < img src={C6} />,
      id: "6",
      titulo: "Air Force 1 Gtx Krmg",
      precio: "181.89"
    },
    {
      img: < img src={C7} />,
      id: "7",
      titulo: "Nike Air Force 1 Mid",
      precio: "139.09"
    },
    {
      img: < img src={C8} />,
      id: "8",
      titulo: "Air Formce 1 LV8 EMb",
      precio: "101.64"
    },
    {
      img: < img src={C9} />,
      id: "9",
      titulo: "Nike Court Vision Low",
      precio: "70.61"
    }
  ];
    
  return (
    <PageWrapper>

    {producto.map(productos =>
      <Card  image={productos.img} id={productos.id} titulo={productos.titulo} precio={productos.precio} />
    )}
  </PageWrapper>
  )
}
