import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';
import axios from 'axios';
import './Footer.css';

const Footer = () => {
  const [formData, setFormData] = useState({ number: '', email: '', textarea: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/Message", formData);
      console.log("Response:", response.data);
      setFormData({ number: '', email: '', textarea: '' });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="logo-text"><span>Webster</span>Recipes</h2>
          <p>Discover delicious recipes that will inspire your culinary journey. From traditional favorites to innovative creations, we've got you covered.</p>
          <div className="socials">
            <a href="#" className="social-icon"><FaFacebook /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaPinterest /></a>
          </div>
        </div>

        <div className="footer-section quick-links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Recipes</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>

        <div className="footer-section ">
          <h2>Debatics Foods</h2>
          <p>Explore the world of Debatics Foods for unique culinary experiences.</p>
          <div className="recipe-ingredients">
            <h3>Food Recipe Ingredients</h3>
            <ul>
              <li>Ingredient 1</li>
              <li>Ingredient 2</li>
              <li>Ingredient 3</li>
            </ul>
          </div>
        </div>

        <div className="footer-section contact">
          <h2>Contact Us</h2>
          
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="number" 
              value={formData.number} 
              onChange={handleChange} 
              className="text-input contact-input" 
              placeholder="Your phone no required" 
            />
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="text-input contact-input" 
              placeholder="Your email address" 
            />
            <textarea 
              rows="4" 
              name="textarea" 
              value={formData.textarea} 
              onChange={handleChange} 
              className="text-input contact-input" 
              placeholder="Your message" 
            />
            <button type="submit" className="btn">
              Send
            </button>
            <p>&copy; 2024 WebsterRecipes.com | Designed by Ahmad</p>
          </form>
        </div>
      </div>
      </footer>
      
  );
};

export default Footer;
