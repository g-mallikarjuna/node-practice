const secret = 'This is a secret';

const firstName = 'John';
const lastName = 'Doe';


function greetings(){
    console.log(`Hello ${firstName+lastName}`);
}



const sum = (num1, num2)=>{
    return (num1+num2);
}

module.exports = {firstName, lastName, greetings, sum};