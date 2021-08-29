// javascript object (Notation)
// JSON 

// From normal javascript object to JSON notation by using JSON.stringify(object) and again we can convert stringified json to normal js object by JSON.parse(object). 
const user = { id: 11, name: 'gorib aamir', job: 'actor' };

const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    name: 'alia shop',
    address: 'Ranbir road',
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {name: 'Alia Bhatt', profession: 'actor'},
    isExpensive: false
}
const shopStringified = JSON.stringify(shop);
console.log(shopStringified);
// console.log(shop);
const converted = JSON.parse(shopStringified);
console.log(converted);