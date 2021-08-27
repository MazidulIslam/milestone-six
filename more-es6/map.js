// pick up every array element and do something with those element and finaly store the result into a new empty array = this is array mapping 
const numbers = [4, 6, 8, 10];
const output2 = [];

// old function system
// const doubleIt = (number){
//     return = number * 2;
// }
// new function system 
const doubleIt = number => number * 2;
// for loop 
for (const number of numbers) {
    const result = doubleIt(number);
    output2.push(result);
}
// console.log(output2);


// 1. loop througn each element
// 2. for each element call the provided function
// 3. resullt for each will be stored in an array


// const output = numbers.map(doubleIt);
// const output = numbers.map(number => number * 2);
const output = numbers.map(x => x * 2);
console.log(output);

const squares = numbers.map(x => x * x);
console.log(squares);