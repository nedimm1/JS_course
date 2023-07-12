'use strict';

//A while loop is a control flow structure in JavaScript that allows you to repeatedly execute
// a block of code as long as a specified condition is true

//for loops are commonly used when you know the number of iterations in advance or 
//when you need to control the loop more explicitly with initialization and iteration steps.
for(let messageNumber = 1; messageNumber <= 10; messageNumber++){
    
    console.log(`message number ${messageNumber}`)
    
}

//while loops are typically used when you need to repeatedly execute a block of code based on 
//a condition that may change dynamically during runtime.
console.log('---while loop---')
let messageNumber = 1;
while(messageNumber <= 10){
    console.log(`message number ${messageNumber}`)
    messageNumber++
}

console.log('---example without the counter---')
let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6){
   console.log(dice) 
   dice = Math.trunc(Math.random() * 6) + 1;
   if(dice === 6) console.log("dice = 6")
}