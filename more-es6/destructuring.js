const fish = {
    name: 'king hilsha',
    id: 22,
    price: 3333,
    phone: '03994038',
    address: 'chadpur',
    dress: 'silver'
};
// const phone = fish.phone;
// const price = fish.price;
// console.log(fish.phone);
// console.log(phone, price);

const { phone, price, dress, id } = fish;
console.log('new log here : ', phone, price, dress, id);

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
const { work, framework } = company.web;
console.log(work, framework);
const { name1, phone1, address } = company.ceo;
console.log(name1, phone1, address);
const { lang, css, js } = company.web.tech;
console.log(lang, css, js);