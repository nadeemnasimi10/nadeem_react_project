Landing Page: A welcoming page with a background image, company info, and a "Get Started" button that links to the product listing.
Product Listing: Displays a list of houseplants, grouped into categories, with an "Add to Cart" button for each plant.
Shopping Cart: Shows all items in the cart with options to increase, decrease, or remove items, and displays the total cost.
Header Navigation: A persistent header with links to navigate between pages and shows the total number of items in the cart.
Tech Stack
Frontend: React, Redux
Styling: CSS (Add any additional libraries if used)
State Management: Redux for handling cart and product data
Landing Page
The landing page displays a background image, a paragraph about the store, and a "Get Started" button. Clicking "Get Started" takes you to the product listing page.

Product Listing Page
Here you can:

View a selection of houseplants, grouped by category.
Add plants to the cart using the "Add to Cart" button.
Each item shows its thumbnail, name, and price.

Shopping Cart
On the shopping cart page, you can:

View all items added to the cart, along with their quantities.
Increase or decrease the quantity of each item.
Remove an item entirely from the cart.
See the total number of items and the total cost.
Click "Checkout" (currently displays a "Coming Soon" message).
Click "Continue Shopping" to return to the product listing page.
Redux State Management
This project uses Redux for managing the cart and product data:

Actions: cartActions.js and productActions.js define actions for adding, removing, incrementing, and decrementing items in the cart.
Reducers: cartReducer.js and productReducer.js handle the actions dispatched to update the state.
Store: store.js creates a centralized store for managing application state.
