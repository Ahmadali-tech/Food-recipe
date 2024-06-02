import React, { useContext } from 'react';
import './Tradition.css';
import logo from '../Traditional/biryani.jpg';
import logo2 from '../Traditional/Traditional.jpg';
import logo5 from '../Traditional/RajistaniBiryani.jpg';
import logo6 from '../Traditional/biryani.jpg';
import logo7 from '../Traditional/Curry.jpg';
import logo8 from '../Traditional/MeatHunt.jpg';
import logo9 from '../Traditional/MixPotatoes.jpg';
import logo10 from '../Traditional/Samaosa.jpg';
import logo11 from '../Traditional/Vegetable.jpg';
import logo12 from '../Traditional/Whitebeans.jpg';
import image from '../Traditional/image.jpg';
import { CartContext } from './Cartcontext';

const Tradition = () => {
    const { dispatch } = useContext(CartContext);

    const items = [
        {id: 1,qty:1,image: logo,name:"mix-Rice",status: "Traditional",price: 50.0,description: "It's very easy to eat and delicious"},
        {id: 2,image: logo2,qty:1,status: "Rice",price: 50.0,name:"Rice",description: "It's very easy to eat and delicious",},
        {id: 3,qty:1,image: logo5,name:"Vegetable Rice",status: "Traditional",price: 50.0,description: "It's very easy to eat and delicious",
        },
        {id: 4,qty:1,image: logo6,name:"Rice ",status: "Traditional",price: 50.0,description: "It's very easy to eat and delicious",
        },
        {id: 5,qty: 1,image: logo7,name:"Haleem boti",status: "Traditional Recipe",price: 50.0,description: "It's very easy to eat and delicious",
        },
        {id: 6,qty:1,image: logo8,name:"Qufta chicken",status: "Food",price: 50.0,description: "It's very easy to eat and delicious",
        },
        {id: 7, image: logo9,qty:1,name:"Mix Dal chawal", status: "Traditional",price: 50.0,description: "It's very easy to eat and delicious",
        },
        {id: 8,qty:1,image: logo10,name:"Samaso vegetable",status: "Traditional",price: 50.0,description: "It's very easy to eat and delicious",
        },
        {id:9,qty:1, image: logo11,name:"Mix Noodle",status: "Traditional",price: 50.0,description: "It's very easy to eat and delicious",
        },
        {id: 10,qty:1,image: logo12,name:"FlareDall", status: "Tradition",price: 50.0,description: "It's very easy to eat and delicious",
        },
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
       
        <div className='Tradition-class'>
            {items.map((item) => (
                <div key={item.id} className='Traditional-Food'>
                    <img src={item.image} alt="image" width={"30%"} />
                    <div className='Traditional-price'>${item.price}</div>
                    <div className='Traditional-name'>{item.name}</div>
                    <button type='button' className="button" onClick={() => handleAddToCart(item)}>Add to Cart</button>
                    <div className='Tradition-Description'>{item.description}</div>
                </div>
            ))}
        </div>
    );
}

export default Tradition;
