const numbers = [3, 4, 3, 44, 52, 56, 677, 2, 1, 9];
const bigNumbers = numbers.filter(number => number > 20);
console.log(bigNumbers);


const products = [
    { name: 'water bottle', price: 406, color: 'yellow' },
    { name: 'water pot', price: 402, color: 'black' },
    { name: 'water glass', price: 440, color: 'red' },
    { name: 'sticky notes', price: 30, color: 'white' },
]
const expensive = products.filter(product => product.price > 100);
const black = products.filter(product => product.color == 'green');
console.log(black);


const whiteItem = products.find(product => product.color = 'white');
console.log(whiteItem);

// filter will give us an array and find will give us exact Element. find will give us the first one but filter will give us as many as we have.  