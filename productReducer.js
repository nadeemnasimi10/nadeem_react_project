const initialState = {
  products: [
    { id: 1, name: 'Aloe Vera', price: 10, imageURL: '/images/aloe.jpg', category: 'Succulents' },
    { id: 2, name: 'Snake Plant', price: 15, imageURL: '/images/snake.jpg', category: 'Succulents' },
    { id: 3, name: 'Peace Lily', price: 12, imageURL: '/images/peace.jpg', category: 'Flowering' },
    { id: 4, name: 'Spider Plant', price: 8, imageURL: '/images/spider.jpg', category: 'Indoor' },
    { id: 5, name: 'ZZ Plant', price: 20, imageURL: '/images/zz.jpg', category: 'Indoor' },
    { id: 6, name: 'Fiddle Leaf Fig', price: 25, imageURL: '/images/fig.jpg', category: 'Indoor' },
  ],
};

const productReducer = (state = initialState, action) => {
  return state;
};

export default productReducer;