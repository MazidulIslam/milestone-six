// let and const 
const hubby = 'Omor sani';
let phone = 'iphone';
phone = 'samsung';
// template string 
const myNotes = `I am laily of ${hubby} and I love him`;
// spread or 3 dots 
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}
const biggest = maxNumber();
console.log(biggest);

// arrow function 
const square = x => x * x;
console.log(square(4));