import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_ITEM, DECREMENT_ITEM } from '../actions/cartActions';

const initialState = {
  items: [],
  totalItems: 0,
  totalCost: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) return state;
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
        totalItems: state.totalItems + 1,
        totalCost: state.totalCost + action.payload.price,
      };

    case REMOVE_FROM_CART:
      const itemToRemove = state.items.find((item) => item.id === action.payload);
      if (!itemToRemove) return state;
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        totalItems: state.totalItems - itemToRemove.quantity,
        totalCost: state.totalCost - itemToRemove.price * itemToRemove.quantity,
      };

    case INCREMENT_ITEM:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
        totalItems: state.totalItems + 1,
        totalCost: state.totalCost + state.items.find((item) => item.id === action.payload).price,
      };

    case DECREMENT_ITEM:
      const itemToDecrement = state.items.find((item) => item.id === action.payload);
      if (itemToDecrement.quantity <= 1) return state;
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
        ),
        totalItems: state.totalItems - 1,
        totalCost: state.totalCost - itemToDecrement.price,
      };

    default:
      return state;
  }
};

export default cartReducer;