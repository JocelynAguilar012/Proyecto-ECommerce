import React from 'react'

export const Basket = (props) => {
    const {cartItems, onAdd, onRemove}=props;
  return (
    <>
    <h2>Cart Items</h2>
    <div>
        {cartItems.length===0 && <div> Cart Is empty</div>}
        {cartItems.map((item)=>(
          <div key={item.id} className="row-cart">
            <div>{item.name}</div> 
            <div>
                <button onClick={()=>onAdd(item)} className="add-to-cart">+</button>
                <button onClick={()=>onRemove(item)} className="remove-cart">-</button>
            </div> 
            <div>
                {item.qty} x ${item.price.toFixed(2)}
            </div> 
          </div> 
        ))}
    </div>
    </>
  )
}
