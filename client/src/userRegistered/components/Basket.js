import React from 'react';
import {addToCart} from '../../api/cart';
import {Toaster,toast} from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import "../../stylesheets/stylebasket.css"


export const Basket = (props) => {
    const {cartItems,onAdd,onRemove}=props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    //impuestos
    const taxPrice = itemsPrice * 0.14;
    //Precio de envio
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    //-----------------------------------------------------
    const user=useAuth().user;
    const {name,email}=user;

    var arr=[]; console.log(cartItems);
    for (let i = 0; i < cartItems.length; i++) {
      arr.push({
        identificador:cartItems[i].id,
        qty:cartItems[i].qty,
        product_name:cartItems[i].name,
        total_price:totalPrice,
        user_name:name
      })}

      //console.log("mi info", arr);

    const db={
      user_name:name,
      user_email:email,
      productSoldId:{arr},
      total_price:totalPrice,
    };


     const AddtoDatabase=async()=>{
      //console.log(cartItems);
      //console.log(productSoldId);
      const result= await addToCart(arr);
      toast.success("Su compra se ha realizado correctamente");
      setTimeout(() => {
        window.location.href="/inicio/usuario";
      }, 2000);
    } 
  
  return (
    <>
    <div id='Carrito'>
        <h2>Cart Items</h2>
    </div>
    <div className='containerbasket'>
     {cartItems.length === 0 && <div>Cart is empty</div>}
     {cartItems.map((item) => (
          <div key={item.id} className="row detalle">
            <div className="col-2">{item.name}</div>
            <div className="col-2 buttons">
            <button onClick={() => onAdd(item)} className="add">
                +
              </button>
              <div className="col-2 text-right cantidad">
              {item.qty} 
              </div>
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>
            </div>
            <div className="col-2 text-right">
            ${item.price.toFixed(2)}
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row" onClick={AddtoDatabase}>
              <button className="buttoncheck">
                Comprar
              </button>
            </div>
          </>
        )}
    </div>
    <Toaster position='top-center'/>
    </>
  )
}
