import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementItem, decrementItem, removeFromCart } from '../redux/actions/cartActions';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementItem(item.id));
  };

  const handleDecrement = () => {
    dispatch(decrementItem(item.id));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="cart-item">
      <img src={item.imageURL} alt={item.name} />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>Price: ${item.price.toFixed(2)}</p>
        <p>Quantity: {item.quantity}</p>
        <div className="cart-item-controls">
          <button onClick={handleIncrement}>+</button>
          <button onClick={handleDecrement} disabled={item.quantity <= 1}>-</button>
          <button onClick={handleRemove}>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;