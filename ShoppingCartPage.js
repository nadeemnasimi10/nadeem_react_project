import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

function ShoppingCartPage() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="cart-summary">
            <p>Total Items: {cart.totalItems}</p>
            <p>Total Cost: ${cart.totalCost.toFixed(2)}</p>
            <button onClick={() => alert("Coming Soon!")}>Checkout</button>
            <button>
              <a href="/products">Continue Shopping</a>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCartPage;