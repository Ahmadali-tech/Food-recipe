import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginComponents.css';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const Navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/api/login', formData,)
      .then(response => {
        console.log('User logged in:', response.data);
      })
      .catch(error => {
        console.error('Login failed:', error);
        Navigate('/Register');
      });
  };

  return (
    <div className='LOGINFORM'>
      <div className='lable'>
       <form onSubmit={handleSubmit} method='POST'>
          <label>Email:</label>
          <input type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required />

          <label>Password:</label>
          <input type="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          required />

          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/Register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginComponent;
