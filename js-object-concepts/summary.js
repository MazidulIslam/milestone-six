const pen = {
    brand: 'econo',
    price: 10,
    writePoem: function (food) {
        console.log(food);
    }
}
const keys = Object.keys(pen);
const values = Object.values(pen);
const entries = Object.entries(pen);
// const key or prop
for (const key in pen) {
    
}

const a = { a: 1 };
const b = { a: 1 };
const c = a;
if (a === b) {
    //buy this way you cant compare. please see compare objects file
}
const aBounded = pen.writePoem.bind(a)
aBounded();
// we can also use call or apply instead of bind 

// In arrow function (this) is not availabe. this is the difference between regular function vs arrow function 