import React, { useContext } from 'react'
import './Cart.css'
import { ClothesContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const {cartItems, Clothes_list, removeFromCart,getTotalCartAmount,url,currency} = useContext(ClothesContext);
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p> <p>Title</p> <p>Price</p> <p>Quantity</p> <p>Total</p> <p>Remove</p>
        </div>
        <br />
        <hr />
        {Clothes_list.map((item, index) => {
          if (cartItems[item._id]>0) {
            return (<div key={index}>
              <div className="cart-items-title cart-items-item">
                <img src={url+"/images/"+item.image} alt="" />
                <p>{item.name}</p>
                <p>{currency}{item.price}</p>
                <div>{cartItems[item._id]}</div>
                <p>{currency}{item.price*cartItems[item._id]}</p>
                <p className='cart-items-remove-icon' onClick={()=>removeFromCart(item._id)}>x</p>
              </div>
              <hr />
            </div>)
          }
        })}
      </div>
     
        <div className="cart-total">
          <h2>total </h2>
          <div>
            <div className="cart-total-details"><p>{getTotalCartAmount()}</p></div>
            <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        
    </div>
    </div>

)}
export default Cart
