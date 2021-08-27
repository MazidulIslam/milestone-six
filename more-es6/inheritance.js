// normally class starts with capital letter but we can also use small letter

class TeamMember{
    name;
    role = 'Support Web Dev';
    address = 'BD'
    // constructor is also a function 
    // which we want to set dynamically we will took those as parameter of constructor function
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember{
    groupSupportTime;
    // must use super constructor when use constructor into extended class 
    constructor(name, address, time) {
        // name and address parameter from super constructor 
        super(name, address)
        this.groupSupportTime = time;
    }
    // constructor is also a function 
    // which we want to set dynamically we will took those as parameter of constructor function
    
    // here is function but we can't write function keyword
    startSession(device) {
        console.log(this.name, 'start a support session from', this.address, 'by', device);
    }
}
class StudentCare{
    name;
    designation = 'Student care web dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    buildARoutine(student) {
        console.log(this.name, 'start a support session', student);
    }
}

class NeptuneDev{
    name;
    designation = 'Student care web dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    releaseApp(version) {
        console.log(this.name, 'release app', version);
    }
}
// aamir from extended class 
const aamir = new Support('Amir Khan', 'dubai', 11);
console.log(aamir);
aamir.startSession('mobile');
const samir = new Support('Samir khan', 'new york');
const gamir = new Support('gmir Khan', 'japan');
const bamir = new Support('bamir khan', 'bali');

const alia = new StudentCare('Alia Bhat', 'Mumbai');
const galia = new NeptuneDev('Galia Bhat', 'Bombay');
galia.releaseApp('2.1');

// Inheritance, extends class, super, class method