import React, { createContext, useEffect, useReducer } from 'react';
import { CartReducer } from './CartReducer';
import axios from 'axios';

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const initialState = {
    shoppingCart: [],
    totalPrice: 0,
    id: 0,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://localhost:3000/api/addtocart", initialState);
        console.log("Response:", response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    
    fetchData();
  }, []); 

  const [state, dispatch] = useReducer(CartReducer, initialState);

  console.log('CartContextProvider State:', state);

  const contextValue = React.useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
