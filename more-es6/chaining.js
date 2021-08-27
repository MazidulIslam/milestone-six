// declare variable based on the name of an object property
const myObject = { x: 2, y: 33, z: 44, a: 23, b: 54 };
console.log('myObject.p ', myObject?.p?.q);
const { x, b } = myObject;
console.log(x, b);

// destructuring array 

const [p, q] = [45, 37, 33,44];
console.log(p, q);

const [best, worst] = ['Himel', 'no-one'];
// console.log(best, worst);
const { sky, soil, color, money } = { sky: 'blue', soil: 'matti', color: 'red', money: 500 };
console.log(sky, soil, color, money);

// chaining (nested object)
const company = {
    name: 'gp',
    ceo: { name1: 'ajmol', id: 22, phone1: 3903, address: 'dhaka' },
    web: {
        work: 'website development',
        employee: 33,
        framework: 'react',
        tech: {
            lang: 'html',
            css: 'tailwind',
            js: 'node'
        }
    }
};
console.log(company.web.tech.js);
console.log(company.backend?.tech.js);

