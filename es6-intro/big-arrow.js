const add = (num1, num2) => num1 + num2;
const result = add(11, 11);
console.log(result);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result1 = multiply(11, 12, 13);
console.log(result1);

const fiveTimes = (num) => num * 5;
const result2 = fiveTimes(10);
console.log(result2);

// if one param no need param bracket 
const tenTimes = num => num * 10;
const result4 = tenTimes(10);
console.log(result4);

const getName = () => 'Brandon Mc.Cullam';
const name = getName();
console.log(name);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x / y;
    const result = sum * diff;
    return result;
}

document.getElementById('my-btn').addEventListener(event => {
    
})