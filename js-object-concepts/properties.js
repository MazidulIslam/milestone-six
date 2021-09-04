const bottle = { color: 'yellow', hold: 'water', price: 50, isCleaned: true };
// getting all property names 
const keys = Object.keys(bottle);
console.log(keys);
const values = Object.values(bottle);
console.log(values);
// this is a two dimensional array 
const keyValuePairs = Object.entries(bottle);
console.log(keyValuePairs);
// if it is seald you cant delete any property 
Object.seal(bottle);
// if it is freeze you cant cange any value of property 
Object.freeze(bottle);
// if sealed you can update any property but cant add any property 
bottle.height = 15;
bottle.price = 100;



delete bottle.isCleaned;
console.log(bottle);