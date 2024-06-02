import React, { useContext, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from 'react-router-dom';
import cart from '../components/cart.jpg';
import logo from '../components/webster.jpg'
import './Navbar.css';
import { CartContext } from './Cartcontext';

const Navbar = () => {
  const { state } = useContext(CartContext);
  const [isNavOpen, setIsNavOpen] = useState(false); 
  const qty = state.shoppingCart.length;

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className={isNavOpen ? "navbar open" : "navbar"}>
      <div className="nav-list">
      <div className='image'>
          <img src={logo} alt="" width ={80} ></img>
        </div>
        <button className="nav-toggle" onClick={toggleNav}>
          <i className={isNavOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
      </div>
     
      <ul className="nav-menu">
        <li>
          <Link to="/Product" onClick={closeNav}>Product</Link>
        </li>
        <li>
          <Link to="/DebeticsFood" onClick={closeNav}>Debitics-Food</Link>
        </li>
        <li>
          <Link to="/Tradition" onClick={closeNav}>TraditionFood</Link>
        </li>
        <li>
          <Link to="/Healthy" onClick={closeNav}>Healthy</Link>
        </li>
        <li>
          <Link to="/Vegetarian" onClick={closeNav}>Vegeterain</Link>
        </li>
        <li>
          <Link to="/Nonvegetarian" onClick={closeNav}>Nonvegetarian</Link>
        </li>
        <li>
          <Link to="/Recipe" onClick={closeNav}>Recipe</Link>
        </li>
        <li>
          <Link to="/LoginComponent" onClick={closeNav}>Login</Link>
        </li>
        <li className="nav-cart" onClick={closeNav}>
          <Link to="/Cart">
            <span className="shopping-cart">
              <img src={cart} alt="" width={'10px'} />
              <span className="cart-count">{qty}</span>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
