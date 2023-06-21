'use strict';

//In JavaScript, a function is a block of code that you can define and give a name to. 
//It encapsulates a series of instructions or statements that are grouped together to perform a specific task or calculate a value.

//this is how a function is decleared:
function greet() {
    console.log('hello world')
}

greet(); //calling / running / invokering a function
greet(); //and now i an reuse this message over and over again
greet();

//anoter example of a function:

function fruitProcessor(apples, oranges) { //thees are parameters: Empty variables specific only for this function that are given value when the function is called
  console.log(apples, oranges);
  const juice = `a juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

//this is how the parameters are given value. Theese values are called arguments
//and now we can make variables with this function:
const applejuice = fruitProcessor(4, 0);

const orangejuice = fruitProcessor(0, 4);

console.log(applejuice);
console.log(orangejuice);
