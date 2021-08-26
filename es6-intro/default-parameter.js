// what we did before es6 or js2015 - if some parameter were missing the add if condition and set value 0;
console.log('Before es6 1st option');
function add(num1, num2) {
    if (num2 == undefined) {
        num2 = 0;
    }
    const total = num1 + num2;
    return total;
}
const result = add(15);
console.log(result);

// Before es6 or 2015 method 
console.log('Before es6 2nd option');
function add(num1, num2) {
        num2 = num2 || 0;
    const total = num1 + num2;
    return total;
}
const result1 = add(15);
console.log(result);
// After es6 set default value 0 if num2 parameter is not set.
console.log('After es6');
function add(num1, num2 = 0) {
        num2 = num2 || 0;
    const total = num1 + num2;
    return total;
}
const result2 = add(15,11);
console.log(result);

