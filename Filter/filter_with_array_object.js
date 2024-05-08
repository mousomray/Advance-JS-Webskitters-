let products = [
    { name: 'Chair', inStock: true },
    { name: 'Table', inStock: false },
    { name: 'Lamp', inStock: true },
    { name: 'Desk', inStock: true },
    { name: 'Bookshelf', inStock: false }
];

// Filtering products that are in stock
let inStockProducts = products.filter(madhu => madhu.inStock);

console.log(inStockProducts);
