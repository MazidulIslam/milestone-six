// spread operator can spreat array element like 23 65 44 55 66 55

const numbers = [23, 65, 44, 55, 66, 55];
console.log(numbers);
// out put of first console is [23, 65, 44, 55, 66, 55]
console.log(...numbers);
// output of second console is 23 65 44 55 66 55

const numbers1 = [23, 65, 44, 55, 66, 55];
const max = Math.max(22, 65, 44);
// const maxInArray = Math.max(numbers1);
const maxInArray = Math.max(...numbers1);
console.log(max, maxInArray);

const numbers2 = numbers1;
numbers1.push(99);
console.log(numbers2);

// const numbers3 = [...numbers1];
// numbers1.push(999);
// console.log('new array' , numbers3);

const numbers3 = [...numbers1, 88];
numbers1.push(999);
console.log('new array' , numbers3);
