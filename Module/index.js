const {firstName, lastName, greetings, sum: addition} = require('./config');

console.log(firstName);
console.log(lastName);

greetings();
console.log(addition(10,10));

