import React, { useContext } from 'react';
import { CartContext } from './Cartcontext';
import './Healthy.css'; 
import logo from '../Health/Food.jpg';
import logo2 from '../Health/Food2.jpg';
import logo3 from '../Health/Food3.jpg';
import logo4 from '../Health/Food4.jpg';
import logo5 from '../Health/images5.JPG';
import logo6 from '../Health/images6.jpg';
import logo7 from '../Health/images2.jpg';
import logo8 from '../Health/image7.jpg';
import logo9 from '../Health/images10.jpg';
import logo10 from '../Health/image9.jpg';
import logo11 from '../Health/images11.jpg';

const Healthy = () => {
    const { dispatch } = useContext(CartContext);

    const items = [
        { id: 1, image: logo, status: "healthy", price: 50, name: "Healthy Food 1", description: "Easy to eat and digest", ingredients: "Meat, salt, buffaloes" },
        { id: 2, image: logo2, status: "healthy", price: 30, name: "Healthy Food 2", description: "Easy to eat and digest", ingredients: "Meat, salt, buffaloes" },
        { id: 3, image: logo3, status: "healthy", price: 30, name: "Healthy Food 3", description: "Easy to eat and digest", ingredients: "Meat, salt, buffaloes" },
        { id: 4, image: logo4, status: "healthy", price: 90, name: "Healthy Food 4", description: "Easy to eat and digest", ingredients: "Meat, salt, buffaloes" },
        { id: 5, image: logo5, status: "healthy", price: 30, name: "Healthy Food 5", description: "Easy to eat and digest", ingredients: "Meat, salt, buffaloes" },
        { id: 6, image: logo6, status: "healthy", price: 90, name: "Healthy Food 6", description: "Easy to eat and digest", ingredients: "Meat, salt, buffaloes" },
        { id: 7, image: logo7, status: "healthy", price: 30, name: "Healthy Food 7", description: "Easy to eat and digest", ingredients: "Meat, salt, buffaloes" },
        { id: 8, image: logo8, status: "healthy", price: 70, name: "Healthy Food 8", description: "Easy to eat and digest", ingredients: "Meat, salt, buffaloes" },
        { id: 9, image: logo9, status: "healthy", price: 60, name: "Healthy Food 9", description: "Easy to eat and digest", ingredients: "Meat, salt, buffaloes" },
        { id: 10, image: logo10, status: "healthy", price: 30, name: "Healthy Food 10", description: "Easy to eat and digest", ingredients: "Meat, salt, buffaloes" },
        { id: 11, image: logo11, status: "healthy", price: 20, name: "Healthy Food 11", description: "Easy to eat and digest", ingredients: "Meat, salt, buffaloes" },
    ];

    const addToCart = (item) => {
        const addedItem = {
            id: item.id,
            price: item.price ,
            name: item.name,
            description: item.description,
            ingredients: item.ingredients,
            image: item.image,
            quantity: 1,
        };

        dispatch({ type: "ADD_TO_CART", payload: addedItem });
    };

    return (
        <div className='Healthy'>
        {items.map(item => (
        <div key={item.id} className='item'>
        <img src={item.image} alt={item.name} className='item-image' width={'20px'} />
        <div className='item-details'>
        <div className='item-name'>{item.name}</div>
        <div className='item-price'>{item.price }</div>
        <div className='item-description'>{item.description}</div>
        <button type='button' className="button" onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
        </div>
            ))}
        </div>
    );
};

export default Healthy;
