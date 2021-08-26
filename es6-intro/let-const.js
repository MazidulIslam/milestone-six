let balance = 1240;
balance = 1340;
const userName = 'Something here';
const weTogether = 'ami ' + userName;
console.log(weTogether);
// userName = 'Nothing';
const numbers = [45, 23, 89, 43];
// cant reasign with const but can modify
// numbers = [34];
numbers.push(11);
numbers[1] = 888;




for (let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}
// console.log(numbers);
const student = { roll: 101, name: 'mofij', job: 'intern' };
//  can modify 
student.name = 'Mofazzol';
// student = { name: 'mofazzol' }; can't reasign 