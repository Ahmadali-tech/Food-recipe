import React, { useContext } from 'react';
import { CartContext } from './Cartcontext';
import './NonVegetarian.css';
import logo from '../Non-Vegetable/recipe.jpg';
import logo2 from '../Non-Vegetable/Bangan.jpg';
import logo3 from '../Non-Vegetable/CripsyFries.jpg';
import logo4 from '../Non-Vegetable/EasyVegetable.jpg';
import logo5 from '../Non-Vegetable/logo.jpg';
import logo6 from '../Non-Vegetable/Qema.jpg';
import logo7 from '../Non-Vegetable/SabziVegetable.jpg';
import logo8 from '../Non-Vegetable/SimpleVegetable.jpg'; 
import logo9 from '../Non-Vegetable/Steam.jpg'; 
import logo10 from '../Non-Vegetable/Tanndor.jpg';

const Nonvegetarian = () => {
    const { dispatch } = useContext(CartContext); 
    const items = [
        { id: 1, price: 50, image: logo, name: 'Alloqema', status: "Non-Vegetarian", description: "its show very humble to eat and taste" },
        { id: 2, price: 80, image: logo2, name: 'Bangan', status: "Non-Vegetarian", description: "its show very humble to eat and taste" },
        { id: 3, price: 80, image: logo3, name: 'CripsyFries', status: "Non-Vegetarian", description: "its show very humble to eat and taste" },
        { id: 4, price: 90, image: logo4, name: 'Vegetable', status: "Non-Vegetarian", description: "its show very humble to eat and taste" },
        { id: 5, price: 70, image: logo5, name: 'MixNoodel', status: "Non-Vegetarian", description: "its show very humble to eat and taste" },
        { id: 6, price: 40, image: logo6, name: 'Qema', status: "Non-Vegetarian", description: "its show very humble to eat and taste" },
        { id: 7, price: 70, image: logo7, name: 'SabziFood', status: "Non-Vegetarian", description: "its show very humble to eat and taste" },
        { id: 8, price: 90, image: logo8, name: 'MixChart', status: "Non-Vegetarian", description: "its show very humble to eat and taste" },
        { id: 9, price: 70, image: logo9, name: 'Steam', status: "Non-Vegetarian", description: "its show very humble to eat and taste" },
        { id: 10, price: 90, image: logo10, name: 'Tandoori', status: "Non-Vegetarian", description: "its show very humble to eat and taste" },
    ];

    const handleAddToCart = (item) => {
        const additems = { 
            id:item.id,
            name:item.name,
            image:item.image,
            status:item.status,
            ingredient:item.ingredients,
            description:item.description,
         };
        dispatch({ type: "ADD_TO_CART", payload: additems }); 
        console.log("Added to cart:", additems);
    };

    return (
        <div>
            <div className='Non-Vegeterian'>
                {items.map(item => (
                    <div key={item.id} className='item'>
                        <img src={item.image} alt={item.description} className='Non-vegetarian' />
                        <div className='Price'>{item.price}</div> 
                        <div className='Non-description'>{item.description}</div>
                        <div className='Non-description'>{item.status}</div>
                        <div className='Non-description'>{item.name}</div>
                        <button type='button' className='button' onClick={() => handleAddToCart(item)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Nonvegetarian;
