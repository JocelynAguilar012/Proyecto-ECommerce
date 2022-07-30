import React from 'react'
import { Product } from './Product';
import "../../stylesheets/StyleRegistered.css";

export const Main = (props) => {
    const{products,onAdd}=props
  return (
    <main>
      <div>
      <div className='catalogue'>
        <div className='row center-xs'>
        {products.map((product)=>(
            <Product key={product.id} product={product} onAdd={onAdd} ></Product>
        ))}
      </div>
      </div>
      </div>  
    </main>
  )
}
