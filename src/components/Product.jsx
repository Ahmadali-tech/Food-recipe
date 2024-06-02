import React, { useContext, useState } from 'react';
import { ProductsContext } from './Showproduct';
import { CartContext } from './Cartcontext'; 
import logo from '../Recipe/Food.jpg';
import logo2 from '../Recipe/Food1.jpg';
import logo3 from '../Recipe/Food2.jpg';
import logo4 from '../Recipe/Food3.jpg';
import logo5 from '../Recipe/Food4.jpg';
import logo6 from '../Recipe/Food5.jpg';
import logo7 from '../Recipe/Food6.jpg';
import logo8 from '../Recipe/Food7.jpg';
import logo9 from '../Recipe/Food8.jpg';
import Banner from './Banner';
import logo11 from '../Recipe/chief.jpg';
import './Product.css';

const Product = () => {
  const { products } = useContext(ProductsContext); 
  const { dispatch } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [showDetails, setShowDetails] = useState({});  

  const filteredProducts = Array.isArray(products) ? 
    products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) : [];

  function handleAddToCart(product) {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  }

  const toggleDetails = (productID) => {
    setShowDetails({...showDetails,[productID]: !showDetails[productID] });
  };

  return (
    <div className="container">
      <div className='container-Head2'>
        <h2>Favourite Food is Your Future Meals
        Food is not just about<br/><span></span> sustenance; it's an artful dance of flavors <br/>a symphony of ingredients, a love letter to the senses. </h2>
        <img src={logo11} alt="Chef" className="chef-image"/>
      </div>
      <div className='container-Head'>
        <h2>Order Your Favourite Food</h2>
      </div>
      <Banner/>
      <div className='Product3'>
        {[logo, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9].map((image, index) => (
          <div className='Product2' key={index}>
            <img src={image} alt={`Food ${index + 1}`} className="food-image"/>
          </div>
        ))}
      </div>

      <div className='searchbar'>
        <input
          id="searchInput"
          type="search"
          placeholder="Search the items"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button type="button" onClick={() => console.log("Search clicked")}>Search</button>
      </div>
      <div className="Product1">
        <h2>Trending Recipes</h2>
      </div>
      <div className="products">
        {filteredProducts.map(product => (
          <div className="product" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-detailed">
              <div className="product-name">{product.name}</div>
              <div className="product-price">${product.price}</div>
              <div className="product-status">{product.status}</div>
              <button className="toggle-button" onClick={() => toggleDetails(product.id)}>
                {showDetails[product.id] ? "Hide Details" : "Show Details"}
              </button>
        
              {showDetails[product.id] && (
                <>
                  <div className="product-description">Description: {product.description}</div>
                  <div className="product-ingredients">Ingredients: {product.ingredients}</div>
                </>
              )}
            </div>
            <div className="add" onClick={() => handleAddToCart(product)}>
              ADD-item
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
