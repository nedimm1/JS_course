/*tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, 
calculated based on the rules above 
(you can check out the code from the first tip calculator challenge if you need to). 
Use the function type you like the most. Test the function using a bill value of 100.
Create an array called tips containing the tip value for each bill, 
calculated from the function you created before.
*/

function calcTip(billValue) {
    const tip =  billValue <= 300 && billValue >= 50 ? console.log(`15% of ${billValue} should be ${billValue * 0.15}`) :
 console.log(`20% of ${billValue} should be ${billValue * 0.2}`);
 return tip;
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

