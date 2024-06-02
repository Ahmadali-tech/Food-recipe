import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; 
import { CartContext } from './Cartcontext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const CartItem = ({ cart, handleIncrement, handleDecrement, handleDelete, calculateProductTotal }) => (
  <div className="cart-item" key={cart.id}>
    <div className="cart">
      <div className="cart-image">
        <img src={cart.image} alt={cart.name} />
      </div>
      <div className="cart-product-details">
        <div className="cart-product-description">{cart.description}</div>
        <span className="cart-product-name">{cart.name}</span>
        <span className="cart-product-price">${cart.price}</span>
        <div className="quantity-controls">
          <span className="control" onClick={() => handleDecrement(cart.id)}>
            <FontAwesomeIcon icon={faMinus} />
          </span>
          <span className="product-quantity">{cart.quantity}</span>
          <span className="control" onClick={() => handleIncrement(cart.id)}>
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </div>
        <span className="product-total-price">${calculateProductTotal(cart)}</span>
        <span className="control delete-product" onClick={() => handleDelete(cart.id)}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </span>
      </div>
    </div>
  </div>
);

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);

  const handleIncrement = (productId) => {
    dispatch({ type: 'INCREMENT_PRODUCT', payload: productId });
  };

  const handleDecrement = (productId) => {
    dispatch({ type: 'DECREMENT_PRODUCT', payload: productId });
  };

  const handleDelete = (productId) => {
    dispatch({ type: 'DELETE_PRODUCT', payload: productId });
  };

  const calculateProductTotal = (cart) => {
    return cart.price * cart.quantity;
  };

  const calculateTotalQuantity = () => {
    return state.shoppingCart.reduce((totalQty, cart) => totalQty + cart.quantity, 0);
  };

  const calculateTotalPrice = () => {
    return state.shoppingCart.reduce((total, cart) => total + cart.price * cart.quantity, 0);
  };

  const handleClick = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div className="container">
      <div className="cart-container">
        {state.shoppingCart.length > 0 ? (
          state.shoppingCart.map((cart) => (
            <CartItem
              key={cart.id}
              cart={cart}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              handleDelete={handleDelete}
              calculateProductTotal={calculateProductTotal}
            />
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
        <div className="cart-summary">
          <div className="summary-header">Cart Summary</div>
          <hr />
          <p>Total Quantity: {calculateTotalQuantity()}</p>
          <p>Total Price: ${calculateTotalPrice()}</p>
        </div>
        <div className="stripe-checkout">
          <div className="check-out">
            <Link to="/checkout">
              <button onClick={handleClick}>CHECKOUT</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

