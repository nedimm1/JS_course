'use strict';

//loops are a fundemental aspect of every programming language
//they allow us to automate repetetive tasks

//a for loop allows us  to repeat a block of code for a specified number of iterations.

//logging a message like this dose not follow the D.R.Y(Don't Repeat Yourself) principle:
/*console.log('message  number 1')
console.log('message  number 2')
console.log('message  number 3')
console.log('message  number 4')
console.log('message  number 5')*/

//a more easier way is to use a for loop
for(let messageNumber = 1; messageNumber <= 10; messageNumber++){
    //loop body
    console.log(`message number ${messageNumber}`)//block of code that will be executed as long as
    //the loop condition is true
}

// initialization step of the for loop:
//It declares the loop variable "messageNumber" and initializes it with a value of 1.

//"messageNumber <= 10"  is a condition that is checked before each iteration of the loop. 
//If the condition is true, the loop continues to execute; if it's false, the loop terminates.

// After each iteration of the loop body, an iteration step is executed:
//"messageNumkber++" 
//This step typically involves updating the loop variable, 
//such as incrementing or decrementing its value. 

//looping arrays

const me = ['Nedim', 'Muminovic', 2023 - 2008, ['mom', 'dad', 'brother'], true, 'high school student']

const types = [];

for(let i = 0; i < me.length; i++){
    console.log(me[i], typeof me[i]);

    //types[i] = typeof me[i];
    types.push(typeof me[i])
}

console.log(types);

const years = [1969, 1991, 1999, 2000, 2008]
const ages = [];

for(let i = 0; i < years.length; i++){
    ages.push(2023 - years[i])
}

console.log(ages)

//continue and break statements

//continue:
//The continue statement is used within loops
//to skip the current iteration and move on to the next iteration

console.log('---ONLY STRINGS---')
for(let i = 0; i < me.length; i++){
    if(typeof me[i] !== 'string') continue;

    console.log(me[i])
}

//break:

//The break statement is used to exit or terminate a loop prematurely.
//This can be useful when you want to stop the loop 
//when a certain condition is met or when you want to exit a loop early.

console.log('---STOPPED WHEN NUMBERE---')
for(let i = 0; i < me.length; i++){
    if(typeof me[i] === 'number') break; 

    console.log(me[i])
}


//looping an array backwards:

console.log('---Backwards loop---')
for(let i = me.length - 1; i >= 0; i--){
    console.log(me[i])
}