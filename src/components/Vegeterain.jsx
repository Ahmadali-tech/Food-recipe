import React, { useContext } from 'react';
import { CartContext } from './Cartcontext';
import './Vegeterian.css';
import logo from '../Vegetarian/channarice.jpg';
import logo1 from '../Vegetarian/download.jpg';
import logo2 from '../Vegetarian/image.jpg';
import logo3 from '../Vegetarian/image2.jpg';
import logo4 from '../Vegetarian/download(3).jpg';
import logo5 from '../Vegetarian/download(4).jpg';
import logo6 from '../Vegetarian/image5.jpg';
import logo7 from '../Vegetarian/GrillTandori rice.jpg';
import logo8 from '../Vegetarian/image6.jpg';
import logo9 from '../Vegetarian/image7.jpg';
import logo10 from '../Vegetarian/image8.jpg';

const Vegeterain = () => {
  const { dispatch } = useContext(CartContext);

  const items = [
    { id: 1, name: 'Vegetarainrice', status: 'vegeterianrice', description: "This rice has mixed with mixture of food", image: logo, ingredient: " rice,potatoes,Salt, banasapti ghee", price: 50 },
    { id: 2, name: 'Nan khatai', status: 'Nankhatai', description: "This is home made Nankhatai with delicious ingredients", image: logo2, ingredient: "Nan ,Food ,rice, ghee", price: 90 },
    { id: 3, name: 'Muttorchicken', status: 'MuttorChicken', description: "Muttor recipe is easy to digest and eat", image: logo1, ingredient: "potatoes,Salt, banasapti ghee", price: 100 },
    { id: 4, name: 'Alloticki', status: 'Alloticki', description: "Alloticki is easy and cheapest recipe", image: logo6, ingredient: "chicken,potatoes,Salt, banasapti ghee", price: 120 },
    { id: 5, name: 'channai', status: 'vegeterian channai', description: "This channai was simple recipe of pakistan food", image: logo3, ingredient: " channai,potatoes,Salt, banasapti ghee", price: 80 },
    { id: 6, name: 'Nan halwa', status: 'Nanhalwa', description: "This halwa has sweet in taste", image: logo4, ingredient: "Halwa, rice,potatoes,Salt, banasapti ghee", price: 70 },
    { id: 7, name: 'Mix-rice', status: 'vegeterianrice', description: "The rice has easy to eat and digest", image: logo5, ingredient: " rice,potatoes,Salt, banasapti ghee", price: 100 },
    { id: 8, name: 'GrillTandori', status: 'GrillTandori', description: "This Tandori chicken has delicious to eat having low price rate", image: logo7, ingredient: " rice,potatoes,Salt, banasapti ghee", price: 50 },
    { id: 9, name: 'Onepottandorian', status: 'Tandorian', description: "This rice has mixed with mixture of food", image: logo8, ingredient: " rice,potatoes,Salt, banasapti ghee", price: 50 },
    { id: 10, name: 'Vegetarainrice', status: 'vegeterianrice', description: "This is simple to eat and digest", image: logo10, ingredient: " rice,potatoes,Salt, banasapti ghee", price: 50 },
    { id: 11, name: 'tandoriparatha', status: 'Tandoriparatha', description: "The paratha is for making for food and recipe", image: logo9, ingredient: " rice,potatoes,Salt, banasapti ghee", price: 50 }
  ];

  const handleAddToCart = (item) => {
    const AddToItem = {
      id: item.id,
      image: item.image,
      name: item.name,
      price: item.price,
      quantity: 1,
      status: item.status,
      description: item.description,
    };
    dispatch({ type: "ADD_TO_CART", payload: AddToItem });
    console.log(AddToItem, "item is added");
  };

  return (
    <div className='Vegeterian'>
      {items.map((item) => (
        <div key={item.id} className='item'>
          <img src={item.image} alt="images" width={'20px'}/>
          <div className='Vegetrain-description'>{item.description}</div>
          <div className='Vegetrain-ingredients'>{item.ingredient}</div>
          <div className='Vegetrian-price'>{item.price}</div>
          <button type='button' onClick={() => handleAddToCart(item)} className='button'>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Vegeterain;
