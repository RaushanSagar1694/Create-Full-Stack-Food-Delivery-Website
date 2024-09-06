
import React, { useContext } from 'react'
import './Card.css';
import { StoreContext } from '../../../context/StoreContext';

const Card = () => {

  const {cartItems, food_list, removeFromCart } = useContext(StoreContext);

  return (
    <div className='cart' id='#/cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
      </div>
    </div>
  )
}

export default Card;
