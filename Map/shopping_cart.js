// Creating a map to store items and their prices in the shopping cart
let shoppingCart = new Map();

// Adding items and their prices to the cart
shoppingCart.set('Apples', 2.5);
shoppingCart.set('Bananas', 1.8);
shoppingCart.set('Oranges', 3.0);

// Removing items from the cart
shoppingCart.delete('Bananas');

// Updating the price of a specific item
shoppingCart.set('Apples', 3.0);

// Displaying the list of items in the cart along with their prices
console.log("Items in the Shopping Cart:");
shoppingCart.forEach((price, item) => {
  console.log(`${item}: $${price}`);
});

// Calculating the total cost of all items in the cart
let totalCost = 0;
shoppingCart.forEach((price) => {
  totalCost += price;
});
console.log(`Total Cost: $${totalCost.toFixed(2)}`);
