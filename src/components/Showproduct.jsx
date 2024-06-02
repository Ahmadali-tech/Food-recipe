import React, { createContext, useEffect, useState } from "react";
import './Showproduct.css';
import Allometic from '../Assests/Allometi.jpg';
import Alloqema from '../Assests/Alloqema.jpg';
import Bangalian from '../Assests/Bangalian.jpg';
import Bhatha from '../Assests/bhatha.jpg';
import Biryani from '../Assests/Biryani.jpg';
import chicken from '../Assests/chicken.jpg';
import chickenChoami from '../Assests/chickenChoami.jpg';
import Cutlus from '../Assests/Cutlus.jpg';
import Russion from '../Assests/D.jpg';
import Food from '../Assests/Food.jpg';
import Food3 from '../Assests/Food3.jpg';
import images from '../Assests/images.jpg';
import Mixfood from '../Assests/Mixfood.jpg';
import potatoes from '../Assests/potatoes.jpg';
import dalchawal from '../Assests/dalchawal.jpg';
import dalmash from '../Assests/dalmash.jpg';
import Deiabetes from '../Assests/Deiabetes.jpg';
import Healty from '../Assests/Healty.jpg';
import images3 from '../Assests/images3.jpg';
import Spagethy from '../Assests/Spegethrice.jpg';
import chickenBiryani from '../Assests/chickenBiryani.jpg';
import debetics from "../Assests/diabetics.jpg";
import AllochanaiMix from "../Assests/allochanai.jpg";
import Dhaibhalai from "../Assests/dahi bhalai.jpg";
import Chickenfigita from "../Assests/Chickwegita.jpg";
import Chickenplao from "../Assests/Chickenplao.jpg";
import KoreanFood from '../Assests/KoreanFood.jpg';
import Healthyfood from '../Assests/Healtth Food.jpg';
import Haleem from '../Assests/Haleem.jpgg.jpg';
import Vegan  from '../Assests/Vegan recipes.jpg';
import Pasta from '../Assests/Pasta.jpg';
import Allochart from '../Assests/Allochart.jpg';
import axios from "axios";

export const ProductsContext = createContext();

const ShowProductProvider = (props) => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Alloqema', price: '110.00', status: 'vegetarian', image: Alloqema, ingredients: 'Potatoes, onions, spices', description: 'Alloqema is a delicious vegetarian dish made with fresh potatoes, onions, and a blend of aromatic spices.' },
    { id: 2, name: 'Bhatha', price: '110.00', status: 'vegetarian', image: Bhatha, ingredients: 'Rice, lentils, spices', description: "Bhatha is a traditional vegetarian dish made with fragrant rice, lentils, and a special blend of spices." },
    { id: 3, name: 'Chicken', price: '190.00', status: 'non-vegetarian', image: chicken, ingredients: 'Chicken, herbs, spices', description: "Chicken is a popular non-vegetarian dish made with tender chicken pieces, fresh herbs, and a flavorful blend of spices." },
    { id: 4, name: 'Potatoes', price: '100.00', status: 'vegetarian', image: potatoes, ingredients: 'Potatoes, olive oil, salt', description: "Potatoes are a versatile and delicious vegetarian option, perfect for roasting, mashing, or frying." },
    { id: 5, name: 'Bangalian', price: '130.00', status: 'non-vegetarian', image: Bangalian, ingredients: 'Beef, potatoes, carrots', description: "Bangalian is a hearty non-vegetarian stew made with tender beef, potatoes, and carrots, simmered in a rich broth." },
    { id: 6, name: 'Allometic', price: '150.00', status: 'mix-FOOD', image: Allometic, ingredients: 'Rice, chicken, vegetables', description: "Allometic is a flavorful mix of rice, tender chicken, and assorted vegetables, seasoned to perfection." },
    { id: 7, name: 'Cutlus', price: '150.00', status: 'Fast-Food', image: Cutlus, ingredients: 'Beef, cheese, lettuce', description: "Cutlus is a delicious fast-food option, featuring a juicy beef patty topped with melted cheese and crisp lettuce, served on a sesame seed bun." },
    { id: 8, name: 'Russion-Soap', price: '150.00', status: 'vegetarian', image: Russion, ingredients: 'Tofu, vegetables, soy sauce', description: "Russion is a vegetarian dish made with savory tofu, fresh vegetables, and a drizzle of soy sauce." },
    { id: 9, name: 'Indian-Biryani', price: '350.00', status: 'vegetarian', image: Food, ingredients: 'Assorted vegetables, noodles, sauce', description: "Food is a tasty vegetarian stir-fry dish made with a colorful array of vegetables, tender noodles, and a flavorful sauce." },
    { id: 10, name: 'Qorma', price: '120.00', status: 'vegetarian', image: Food3, ingredients: 'Paneer, cream, spices', description: "Food3 is a rich and creamy vegetarian dish made with soft paneer cubes, creamy sauce, and a blend of aromatic spices." },
    { id: 11, name: 'Bangalian-MixFood', price: '500.00', status: 'non-vegetarian', image: images, ingredients: 'Lamb, rice, nuts', description: "Images is a luxurious non-vegetarian dish made with tender lamb, fragrant rice, and a generous sprinkling of nuts and raisins." },
    { id: 12, name: 'Mixfood', price: '100.00', status: 'mix-FOOD', image: Mixfood, ingredients: 'Chicken, lamb, rice', description: "Mixfood is a delightful fusion dish made with succulent chicken, tender lamb, and fluffy rice, infused with aromatic spices." },
    { id: 13, name: 'chickenBiryani', price: '50.00', status: 'non-vegetarian', image: chickenBiryani, ingredients: 'Chicken, Half fry, spices,Masala', description: "Chicken Biryani is a mouthwatering non-vegetarian dish made with marinated chicken, tangy yogurt, and a blend of aromatic spices." },
    { id: 14, name: 'chickenChoami', price: '50.00', status: 'non-vegetarian', image: chickenChoami, ingredients: 'Chicken, yogurt, spices,Noddles', description: "Chicken Choami is a mouthwatering non-vegetarian dish made with marinated chicken, tangy yogurt, and a blend of aromatic spices." },
    { id: 15, name: 'Half Palao', price: '60.00', status: 'vegetarian', image: Healty, ingredients: 'Chicken, vegetables,rice, spices', description: "Healthy is a mouthwatering vegetarian dish made with marinated chicken, tangy yogurt, and a blend of aromatic spices." },
    { id: 16, name: 'Chicken-Spigity', price: '70.00', status: 'non-vegetarian', image: images3, ingredients: 'Chicken, rice, spices', description: "Images3 is a mouthwatering non-vegetarian dish made with marinated chicken, tangy yogurt, and a blend of aromatic spices." },
    { id: 17, name: 'Bangali-Bharta', price: '70.00', status: 'non-vegetarian', image: images, ingredients: 'Chicken, yogurt, spices', description: "Images is a mouthwatering non-vegetarian dish made with marinated chicken, tangy yogurt, and a blend of aromatic spices." },
    { id: 18, name: 'dalchawal', price: '90.00', status: 'non-vegetarian', image: dalchawal, ingredients: 'Chicken, meant, spices', description: "Dalchawal is a mouthwatering non-vegetarian dish made with marinated chicken, tangy yogurt, and a blend of aromatic spices." },
    { id: 19, name: 'dalmash', price: '90.00', status: 'non-vegetarian', image: dalmash, ingredients: 'Chicken, yogurt,spices', description: "Dalmash is a mouthwatering non-vegetarian dish made with marinated chicken, tangy yogurt, and a blend of aromatic spices." },
    { id: 20, name: 'Chickenplao', price: '80.00', status: 'vegetarian', image: chickenBiryani, ingredients: 'Chicken, eggs, spices', description: "Chickenplao is a mouthwatering non-vegetarian dish made with marinated chicken, tangy yogurt, and a blend of aromatic spices." },
    { id: 21, name: 'Salad', price: '50.00', status: 'vegetarian', image: Deiabetes, ingredients: 'Salad, Tofu, spices', description: "Deiabetes is a mouthwatering vegetarian dish made with marinated chicken, tangy yogurt, and a blend of aromatic spices." },
    { id: 22, name: 'Mix-vegetables', price: '50.00', status: 'vegetarian', image: debetics, ingredients: 'Chicken, yogurt, spices', description: "Deiabetes is a mouthwatering vegetarian dish made with marinated chicken, tangy yogurt, and a blend of aromatic spices." },
    {id:23, name: "Vegan recipes ",price :"70.00",status :"vegetarian",image:Vegan , ingredients: 'Milk, pistabadam, ghee,salt spices ', description:"Vegan is eid recipe during prayers eat before going to namaz "},
    {id :24, name:"KoreanFood" ,price:"80.00", status:"vegetarion", image:KoreanFood ,ingredients: "Rice, seed, salt,spices, Yougur " ,description:"Korean Food is non western recipe to take some good Health care" },
    {id:25, name:"Pasta" , price:"90.00", status:"Vegetrion ", image:Pasta ,ingredients:"Noodles , salt yougurt ",Description:"Pasta is western food recipe with mixture of the Food"},
    {id:26 , name:"Haleem" ,price:"30.00" ,status:"Vegetrion", image:Haleem , ingredients:"Salt , spices, chicken, yogurt ",Description:"Haleem is eastern food recipe with some onion taste ."},
    { id: 28, name:"AllochanaiMix", price:"30.00" ,status:"Vegeterion" ,image:AllochanaiMix, ingredient:"potatoes, onoin ,salts, salad, seeds", description:"Its is the special food recipe for small time eating "},
    {id: 30, name:"Allochart", price:"40.00", status: "Vegeterion", image:Allochart,ingredient:"potatoes, onion, salt", description:"Allochar is the mix recipe during part get togrther family" },
    {id: 31, name:"Dhaibhalai", price:"70.00", status: "Vegeterion", image:Dhaibhalai,ingredient:"potatoes, onion, salt", description:"Allochar is the mix recipe during part get togrther family" },
    {id: 32, name:"Chickenfigita", price:"90.00", status: "Vegeterion", image:Chickenfigita,ingredient:"potatoes, onion, salt", description:"Allochar is the mix recipe during part get togrther family" },
    {id: 33, name:"Chickenplao", price:"90.00", status: "Vegeterion", image:Chickenplao,ingredient:"potatoes, onion, salt", description:"Allochar is the mix recipe during part get togrther family" },
    {id: 34, name:"Healthyfood", price:"70.00", status: "Vegeterion", image:Healthyfood,ingredient:"potatoes, onion, salt", description:"Allochar is the mix recipe during part get togrther family" },
    {id:34,name:"BiryaniFood",price:"70.00",status:"Vegeterion",image:Biryani ,ingredients:"Mix masala ,onion ,chicken",description:"This taste is very yummy to eat and delicious to eat"},
    {id:34,name:"Spagethy",price:"70.00",status:"Vegeterion",image:Spagethy ,ingredients:"Mix masala ,onion ,chicken",description:"This taste is very yummy to eat and delicious to eat"}
  ]);

  const updateProducts = (newProducts) => {
    setProducts(newProducts);
  };

  useEffect(() => {
    axios
      .post("http://localhost:3000/api/addTocart")
      .then((response) => {
        updateProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const contextValue = {
    products,
    updateProducts,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ShowProductProvider;