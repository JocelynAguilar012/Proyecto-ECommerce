import React from 'react';
import '../../stylesheets/StyleRegistered.css'
import PageWrapper from '../components/PageWrapper';
import Card from '../components/Card';
import C10 from '../../assets/catalogo/10.png';
import C11 from '../../assets/catalogo/11.png';
import C12 from '../../assets/catalogo/12.png';
import C13 from '../../assets/catalogo/13.png';
import C14 from '../../assets/catalogo/14.png';
import C15 from '../../assets/catalogo/15.png';
import C16 from '../../assets/catalogo/16.png';
import C17 from '../../assets/catalogo/17.png';
import C18 from '../../assets/catalogo/18.png';

export const Product2 = () => {
  let producto = [
    {
      img: < img src={C10}  />,
      id: "10",
      titulo: "Nike Court Legacy Lift",
      precio: "93.08"
    },
    {
      img: < img src={C11}  />,
      id: "11",
      titulo: "Nike Revolution 6 Next",
      precio: "64.19"
    },
    {
      img: < img src={C12}  />,
      id: "12",
      titulo: "Nike Renew In-Season",
      precio: "74.89"
    },  
    {
      img: < img src={C13}  />,
      id: "13",
      titulo: "Nike Air Max SYSTM",
      precio: "106.99"
    },
    {
      img: < img src={C14}  />,
      id: "14",
      titulo: "Air Force 1",
      precio: "128.39"
    },
    {
      img: < img src={C15}  />,
      id: "15",
      titulo: "W Aire Force 1",
      precio: "106.99"
    },
    {
      img: < img src={C16}  />,
      id: "16",
      titulo: "W Aire Force 1 SE",
      precio: "106.99"
    },
    {
      img: < img src={C17}  />,
      id: "17",
      titulo: "W Air Force 1 ESS",
      precio: "117.69"
    },
    {
      img: < img src={C18}  />,
      id: "18",
      titulo: "Nike Aire Max Bella TR 5",
      precio: "80.24"
    }
  ]
  return (
    <PageWrapper>

      {producto.map(productos =>
        <Card image ={productos.img} id = {productos.id} titulo ={productos.titulo} precio={productos.precio} />
        )}

      </PageWrapper>
      
  )
}
