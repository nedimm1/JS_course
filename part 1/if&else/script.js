//if/else statement is a control structure used to make decisions and execute different blocks of code based on certain conditions.
if(age >= 18){//tis is the condition, an expression that evaluates to either true or false. 
    console.log("U can drive")
}else{//an alternative code block in case the previous statement is false
    const yearsLeft = 18;
    console.log(`u are too young, you have to wait ${yearsLeft - age} more years`)
}

const birthyear = 2008;
if(birthyear <= 2000){
    let century = 20;
}else{
    century = 21;
}
console.log(century);

//we can also use "else if" statements which is another control structure which provides another condition in case the previous
//condition was false
//looks something like this
if (condition1) {
    //  block of code to be executed if condition1 is true
  } else if (condition2) {
    //  block of code to be executed if the condition1 is false and condition2 is true
  } else {
    //  block of code to be executed if the condition1 is false and condition2 is false
  }