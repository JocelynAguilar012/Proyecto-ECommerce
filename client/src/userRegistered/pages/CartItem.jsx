import React from 'react';
import "../../stylesheets/Catalogo.css"

export const CartItem = (props) => {
    const{countCartItems}=props;
  return (
    <>
    <div className='CartItem'>
    <a href='#Carrito'>
    
    Carrito{' '}
    {countCartItems ? (<button className='badge'>{countCartItems}</button>

    ) :('')}

    </a>
    </div>
    </>
  )
}
