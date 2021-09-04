// falsy 
// false, undefined, null, empty string, NaN, 0

// Truthy: 
// true, any number(positive or negative), string true(including white screen or space '0'), empty array [], empty object {}
// anything else that is not falsy is truthy
const x = false;
if (x) {
    console.log('variable is truthy');
} else {
    console.log('variable is falsy');
}
const y = 4;
if (y) {
    console.log('variable is truthy');
} else {
    console.log('variable is falsy');
}