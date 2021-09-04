// triple checks data type and value but double equal check just value not type
// double equal checks value by converting itself hidingly but doesn't show in console( this is called implicit conversion)

// primivite data can compare with == or === but Array or Object can compare with == or ===
const first = 2;
const second = '2';
if (first === second) {
    console.log('condition is true')
} else {
    console.log('condition is false')
}

// more comparison 
const a = { name: 'ali' };
const b = { name: 'ali' };
if (a == b) {
    console.log('they are same');
} else {
    console.log('they are not same');
}
