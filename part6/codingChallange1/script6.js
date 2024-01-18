// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each
option.
 This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3,
   increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense 
   (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'),
 which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). 
 This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option.
 Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
*/

function displayOptions(array) {
    let options = " "
    for (let i of array) {
        console.log(options)
        options += i + '\n'
    }
    return options
}

const poll = {
    question: "What is your favorite programming language",
    options: ['0: JS', "1: Python", "2: Rust", '3: C++'],
    registerNewAnswer() {
     
        const answer = Number(prompt(` What is your favourite programming language? \n${displayOptions(this.options)}`))
        
        
        if (isNaN(answer)) {
            console.log("Invalid input. Please enter a valid number.");
        } else if (answer > 3) {
            console.log("Number too large.");
        } else {
            this.answers[answer] = answer;
            return this.answers
        }
        
    },

    displayOptions(type){
        if(Array.isArray(type)){
         console.log(type)
        }else if(typeof(type) == String){
         console.log(`Poll results: ${type}`)
        }
     },

    answers: new Array(4).fill(0)

}


let dp = poll.registerNewAnswer.bind(poll)




let result = poll.displayOptions.bind(poll)



document.querySelector('.poll').addEventListener('click', function(){
   result(dp())

})
