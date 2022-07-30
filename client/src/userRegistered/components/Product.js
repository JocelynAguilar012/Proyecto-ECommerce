import React from 'react';
import {Toaster,toast} from 'react-hot-toast';

export const Product = (props) => {
    const {product,onAdd}=props;
    const message=()=>{
        toast.success("Producto agregado correctamente");
    }
  return (
    <>
    <div className='col-xs-10 col-sm-6 col-md-4 productregistro'>
     <div className='cardregistro'>
      <div>
        {product.image}
      </div>
      <h4>{product.name}</h4>
      <p>{product.gender}</p>
      <p>${product.price}</p>
      <div>
        <button className='addcar' onClick={() => onAdd(product)}>Add To cart</button>
      </div>
      </div>
      </div>
      <Toaster className="toaster" position='top-center' />
      </>
  )
}
