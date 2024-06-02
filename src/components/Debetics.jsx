import React, { useContext } from 'react';
import './Debetics.css';
import { CartContext } from './Cartcontext'; 
import logo from '../Assests/images.jpg';
import logo3 from '../Assests/Allometi.jpg';
import log3 from '../Assests/Deiabetes.jpg';
import logo6 from '../Assests/dalmash.jpg';
import logo4 from '../Assests/dalchawal.jpg';
import logo5 from '../Assests/Mixfood.jpg';
import logo7 from '../Assests/images.jpg'
import logo8 from '../Assests/allochanai.jpg';


const Debetics = () => {
  const { dispatch } = useContext(CartContext);

  const items = [
    {id: 1,name: 'Debetic',price: 50,image: logo,description: 'Russian-Food is very healthy and reliable food recipe for the coldblood patient.'},
    {id: 2,name: 'Registani',price: 70,image: logo3,description: 'Registani-Food is look good to eat and also make the digested quickly.'},
    {id: 3,name: 'dalmash',price: 60,image: logo6,description: 'Dalmash-recipe for  patients giving food ,which are better for the digestion and eating very well '},
    {id: 4,name: 'dalchawal', price: 60,image: logo4,description: 'Dalchawal-recipe is simple and diabetes free recipe '},
    {id: 5,name: 'Mixfood',price: 60,image: logo5,description: 'MixFood recipe is easy to eat and digested during travelling'},
    {id: 7, name: 'vegetrian rice',price: 60,image: logo7,description: 'Indian-making  food is lookig great and also benefits for the health'},
    {id: 8,name: ' Mix Allocahnai',price: 60,image: logo8,description: 'Mix-Allochanai is old traditional way of eating food for the old age person'},
    {id: 9,name: ' Mix Food ',price: 90,image: log3,description: 'Mix-Food is a natural way of purify food'},

  ];

  const handleAddToCart = (item) => {
    const itemToAdd = {
      id: item.id, 
      name: item.name, 
      price: item.price, 
      quantity: 1,
      image: item.image,
      description:item.description
    };

    dispatch({ type: 'ADD_TO_CART', payload: itemToAdd });
    console.log(itemToAdd, 'added to cart');
  };

  return (
      <div className='Debetics-class'>
      {items.map((item) => (
      <div key={item.id} className='Debetics-Food'>
      <img src={item.image} alt="image" width={"100%"}/>
      <div className='Debetics-price'>{item.price}</div>
      <div className='Debetices-name'>{item.name}</div>
      <button type='button' className="button" onClick={() => handleAddToCart(item)}>Add to Cart</button>
      <div className='Debetics-Description'>{item.description}</div>
      
        </div>
      ))}
    </div>
  );
};

export default Debetics;

