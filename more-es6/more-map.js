const friends = ['tom hanks', 'tom cruise', 'tom solaiman', 'tom bradman'];
const fLengths = friends.map(friend => friend.length);
// console.log(fLengths);

const products = [
    { name: 'water bottle', price: 406, color: 'yellow' },
    { name: 'water pot', price: 402, color: 'black' },
    { name: 'water glass', price: 440, color: 'red' },
    { name: 'sticky notes', price: 30, color: 'white' },
]
const produtNames = products.map(pName => pName.name);
// const produtPrices = products.map(pPrice => pPrice.price);
const produtPrices = products.map(pPrice => console.log(pPrice.price));
// const produtPrices = products.forEach(pPrice => console.log(pPrice.price));
// console.log(produtPrices);



// (map) can return but (forEach) can't return . So we will use map when we need return and we will use forEach when we don't need return from a function
