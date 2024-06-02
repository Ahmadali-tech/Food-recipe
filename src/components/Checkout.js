import React, { useState } from 'react';
import './Checkout.css';

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    country: '',
    zipCode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      city: '',
      country: '',
      zipCode: ''
    });
    alert('Thank you for your purchase! Your cart has been cleared.');
  };

  return (
    <div>
      <div className='checkout'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label html='firstName'>First Name:</label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              placeholder='Enter your first name'
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label html='lastName'>Last Name:</label>
            <input type='text'id='lastName'name='lastName'placeholder='Enter your last name'value={formData.lastName}onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label html='email'>Email:</label>
            <input type='email' id='email'name='email' placeholder='Enter your email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label for='phone'>Phone:</label>
            <input type='tel'id='phone' name='phone'placeholder='Enter your phone number'
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='city'>City:</label>
            <input type='text' id='city'name='city' placeholder='Enter your city'value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label For='country'>Country:</label>
            <input type='text'id='country' name='country'placeholder='Enter your country' value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label For='zipCode'>Zip Code:</label>
            <input
              type='text'
              id='zipCode'
              name='zipCode'
              placeholder='Enter your zip code'
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label for ="Account No">Acount:</label>
            <input type="text" id="Account No" name="country" placeholder='enter your card no'>

            </input>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
