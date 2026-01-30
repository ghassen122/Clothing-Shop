/*import React, { useContext } from 'react'
import {ClothesContext  } from '../../context/context'
import './ClothesDisplay.css'
import basket1 from '../../assets/basket1.png';

const ClothesDisplay = ({category}) => {

  const { Clothes_list ,url, cartItems, addToCart} = useContext(ClothesContext);

  return (
    <div className='clothes-display' id='clothes-display'>
      <h2>Top Clothes</h2>
      <div className='clothes-display-list'>
       {Clothes_list.map((item) =>(
        <div key={item._id} className='clothes-item '>
          
          <img src ={`${url}/images/${item.image}`} className='img'/>
          <h3>{item.name}</h3>
          <div className='flex-price-button'>
          <p>{item.price} $</p> 
           <button className='add' onClick={() => addToCart(item._id)} ><img src={basket1} className='imag'/><p>Add to cart</p></button>
                
          </div>
         
          
        </div>
          ))
       }
      
        

      </div>
    </div>
  
)}

export default ClothesDisplay
*/
import React, { useContext } from 'react';
import { ClothesContext } from '../../context/context';
import './ClothesDisplay.css';
import basket1 from '../../assets/basket1.png';

const ClothesDisplay = ({ category }) => {
  const { Clothes_list, url, addToCart } = useContext(ClothesContext);

  // Filtrage des vêtements
  let filteredClothes = Clothes_list
   filteredClothes =
    category === "All"
      ? Clothes_list // si All, on affiche tout
      : Clothes_list.filter(item => item.category === category); // sinon on filtre

  return (
    <div className='clothes-display' id='clothes-display'>
      <h2>Top Clothes</h2>
      <div className='clothes-display-list'>
        {filteredClothes.map(item => (
          
          <div key={item._id} className='clothes-item'>
            <img src={`${url}/images/${item.image}`} className='img' />
            <h3>{item.name}</h3>
            <div className='flex-price-button'>
              <p className='price'>{item.price} $</p>
              <button className='add' onClick={() => addToCart(item._id)}>
                <img src={basket1} className='imag' />
                <p className='padd'>Add to cart</p>
              </button>
            </div>
          </div>
         
        ))}
      </div>
    </div>
  );
};

export default ClothesDisplay;