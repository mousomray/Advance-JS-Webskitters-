// Create a map to manage product inventory
let productInventory = new Map();

// Adding products and their quantities to the inventory
productInventory.set('Apple', 50);
productInventory.set('Banana', 100);
productInventory.set('Orange', 75);

// Update quantity of a product
if (productInventory.has('Apple')) {
  let existingQuantity = productInventory.get('Apple');
  productInventory.set('Apple', existingQuantity + 20);
}

// Remove a product from the inventory
if (productInventory.has('Banana')) {
  productInventory.delete('Banana');
}

// Display the current inventory
console.log("Product Inventory:");
productInventory.forEach((quantity, name) => {
  console.log(`${name} - Quantity: ${quantity}`);
});
