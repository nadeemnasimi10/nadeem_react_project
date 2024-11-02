import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

function ProductListingPage() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-listing">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={product.imageURL} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductListingPage;