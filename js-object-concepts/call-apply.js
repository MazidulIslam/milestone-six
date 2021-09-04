// bind is used for use any method from any object to a new object where this method need . 
const masud = {
    id: 101,
    name: 'No Name',
    money: 5000,
    
    
    treatDe: function (expense, tips) {
        this.money = this.money - expense - tips;
        console.log(this);
        return this.money;
    }
}
// masud.treatDe(100);

const heroAlam = {
    id: 102,
    money: 7000,
    name: 'hero balam'
}
const heroKalam = {
    id: 103,
    money: 7000,
    name: 'hero Kalam'
}
// masud.treatDe.call(heroAlam, 400, 600);
masud.treatDe.apply(heroAlam, [300, 600]);
masud.treatDe.apply(heroKalam, [300, 600]);

// bind call apply difference for interview 
// call is directly with comma separate
// apply is derectly with array
// bind is bind the method and store this to a variable function and then call this function 