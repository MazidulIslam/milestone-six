// Different way to declare object

// 1. using object literal or object initialization 
const student = { name: 'sakib al hasan', job: 'cricketer' };
// 2. object constructor 
const person = new Object();
// 3. this is also an object create.
// const human = Object.create(null);
const human = Object.create(student);
// console.log(human.job);

// 4. using class create object
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new People('Manish', 19);
console.log(peop);
// 5. using function create object 
function Manush(name, age) {
    this.name = name;
    this.age = age;
}
const man = new Manush('Omor Sani', 19);
console.log(man);