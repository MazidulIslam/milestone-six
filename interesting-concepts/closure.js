// ekta function theke jodi r ekta function k return kora hoi tahole tar ekta closure toiri hoi eta hocce encapsulation ba private variable 
function stopWatch() {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    }
}
let clock1 = stopWatch();
let clock2 = stopWatch();
// console.log(clock1());
// console.log(clock1());
// console.log(clock1());
// console.log(clock2());
console.log(clock1());


