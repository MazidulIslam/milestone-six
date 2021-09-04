// Primitive and non-primitive 
// There are 7 data types in java script 
// Number, string, undefined, null, object, boolean, symbol 
// primitive types are easy and can carry only one value;
// primitives are immutable 
// non-primitives are not immutable but can change different value and can store multiple data and stores reference for change data in every positions. 


let a = 'hello';
let b = a;
console.log(a, b);
a = 'gelo';
console.log(a, b);

const x = { job: 'web developer' };
const y = x;
console.log(x, y);
x.job = 'front end developer';
console.log(x, y);