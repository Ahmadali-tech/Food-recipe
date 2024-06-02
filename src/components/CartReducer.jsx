export const CartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.shoppingCart.find((item) => item.id === action.payload.id);

      if (existingItem) {
        return state;
      }

      const updatedCartAdd = [...state.shoppingCart, { ...action.payload, quantity: 1 }];
      return {
        ...state,
        shoppingCart: updatedCartAdd,
        totalPrice: state.totalPrice + action.payload.price,
      };

    case 'INCREMENT_PRODUCT':
      const updatedCartIncrement = state.shoppingCart.map((item) =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      );

      return {
        ...state,
        shoppingCart: updatedCartIncrement,
        totalPrice: state.totalPrice + state.shoppingCart.find((item) => item.id= action.payload).price,
      };

    case 'DECREMENT_PRODUCT':
      const updatedCartDecrement = state.shoppingCart.map((item) =>
        item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
      );

      return {
        ...state,
        shoppingCart: updatedCartDecrement.filter((item) => item.quantity > 0),
        totalPrice: state.totalPrice - state.shoppingCart.find((item) => item.id === action.payload).price,
      };

    case 'DELETE_PRODUCT':
      const itemToDelete = state.shoppingCart.find((item) => item.id === action.payload);

      if (!itemToDelete) {
        return state;
      }

      const updatedCartDelete = state.shoppingCart.filter((item) => item.id !== action.payload);

      return {
        ...state,
        shoppingCart: updatedCartDelete,
        totalPrice: state.totalPrice - itemToDelete.price * itemToDelete.quantity || 0,
      };

    case 'CLEAR_CART':
      return {
        ...state,
        shoppingCart: [],
        totalPrice: 0,
      };

    default:
      return state;
  }
};
