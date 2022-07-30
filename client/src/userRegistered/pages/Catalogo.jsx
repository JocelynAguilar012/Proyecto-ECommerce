import React, { useState } from 'react'
import { Basket } from '../components/Basket'
import { Main } from '../components/Main'
import data from '../../data'
import { CartItem } from './CartItem'
//ACA VAMOS A RENDERIZAR TODO

export const Catalogo = () => {
    const {products}=data;
    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
          setCartItems(
            cartItems.map((x) =>
              x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
            )
          );
        } else {
          setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
      };
      const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
          setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
          setCartItems(
            cartItems.map((x) =>
              x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
            )
          );
        }
      };
 
  return (
    <>
    {/*<div style={{background:"orange" ,color:"black"}}>
    <a href='#CI'>Carrito</a>
  </div>*/}
    <CartItem countCartItems={cartItems.length}/>
    <Main onAdd={onAdd} products={products}></Main>
    <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>
    </>
  )
}
