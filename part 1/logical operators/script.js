//logical operators help us combine and evaluate conditions to determine the final outcome.
//In JavaScript, there are three main logical operators: AND (&&), OR (||), and NOT (!).
let NedHasLiscence = true;

let NedCanSeeGood = false;

let NedIsTired = true;

let NedIsAnAdualt = false;

let NedIsNotScared = true;

//AND: both need to be true in order for the condition to be true:
if(NedHasLiscence && NedCanSeeGood){
    console.log("Ned can drive");
}else{
    console.log("Ned cant drive");
}

//OR: At least one has to be true for the whole condition to be ture:
if(NedIsAnAdualt || NedIsNotScared){
    console.log("Ned can watch a scary movie");
}else{
    console.log("Ned cant watch a scary movie");
}

//Not: it cant be true in order to be true:
if(NedHasLiscence && NedCanSeeGood && !NedIsTired){
    console.log("Ned can drive");
}else{
    console.log("Ned cant drive");
}