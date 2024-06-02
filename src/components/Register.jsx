import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ firstname: '', lastname: '', email: '', password: '' });
 const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const isFisrtname=(firstname)=>{
  return firstname;
}
const lastname=(lastname)=>{
  return lastname;
}
  const isValidEmail = (email) => {
    return email.includes('@');
  };

  const isValidPassword = (password) => {
    return password.length >= 8;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      if(!isFisrtname(formData.firstname)){
        alert("please give me first name");

      }
      else if(!lastname(formData.firstname)){
        alert("please give me last name");
      }
      
    else if(!isValidEmail(formData.email)) {
      alert("Please enter a valid email address.");
    } else if (!isValidPassword(formData.password)) {
      alert("Please enter a valid eight-character password.");
    } else {
      const user = { firstname: formData.firstname, lastname: formData.lastname, email: formData.email, password: formData.password };
      console.log('User registered:', user);
     navigate('/Product');
    }
  };

  return (
    <div>
      <div className='Registration'>
        <form onSubmit={handleSubmit} method='POST'>
          <label>Firstname</label>
          <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} required/>
          <label>Lastname</label>
          <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} required/>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <Link to="/Login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
