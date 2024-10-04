// Filter Category wise data
const products = [
    { name: 'Apple', category: 'Fruit' },
    { name: 'Broccoli', category: 'Vegetable' },
    { name: 'Banana', category: 'Fruit' },
];

const grouping = (arr) => {
    const fruits = arr.filter(value => value.category === 'Fruit').map(item => item.name);
    const vegetables = arr.filter(value => value.category === 'Vegetable').map(item => item.name);

    console.log('Fruits: ' + fruits.join(', ') + ' | Vegetables: ' + vegetables.join(', '));
}

grouping(products);