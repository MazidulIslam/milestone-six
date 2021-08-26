// function declaration 
function add(num1, num2) {
    // const sum = num1 + num2;
    // return sum;
    return num1 + num2;
}

// we can use function as variable 
const add2 = function (num1, num2) {
    // annonymous function 
    return num1 + num2;
}
// const add2 = function add2(num1, num2) {
//     return num1 + num2;
// }

const result = add(11, 12);
const result2 = add2(12, 12);
console.log(result, result2);
// document.getElementById('my-btn').onclick = function handleEvent() {
    
// }

// arrow function 
const add4 = (num1, num2) => num1 + num2;
const result3 = add4(22, 22);
console.log(result3);







