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

// const heroTreatDey = masud.treatDe.bind(heroAlam);
const heroTreatDey = masud.treatDe.bind(heroKalam);
heroTreatDey(500,20);
heroTreatDey(500,20);
heroTreatDey(500,20);