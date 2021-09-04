/** Undefined = it is not defined yet
 * 
 * variable value not assigned
 * function but didn't return anything
 * just wrote return but didn't return anything
 * parameter that isn't pass
 * if property is not availabe in object
 * if array index is not available than it is undefined
 * accessing deleted array
 * explicitly set value to undefined
 */
let first;
console.log(first);
function second(x, y) {
    const sum = x + y;
}
const result = second(3, 4);
console.log(result);
const obj = {
    name: 'name', mobile: '903404'
}
const sixth = [33, 44, 53, 24, 24];
console.log(sixth[9]);
delete sixth[2];
console.log(sixth[2]);
const seventh = undefined;
console.log(seventh);

// null = there is no value
const myObj = {
    name: 'samad', profession: null
}