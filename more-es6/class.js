// normally class starts with capital letter but we can also use small letter 
class Support {
    name;
    role = 'Support Web Dev';
    address = 'BD'
    // constructor is also a function 
    // which we want to set dynamically we will took those as parameter of constructor function
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    // here is function but we cant write function keyword
    startSession() {
        console.log(this.name, 'start a support session from', this.address);
    }
}

const aamir = new Support('Amir Khan', 'dubai');
const samir = new Support('Samir khan', 'new york');
aamir.startSession();
samir.startSession();
// console.log(aamir);
// console.log(samir);


// Class, constructor, method, create object from class