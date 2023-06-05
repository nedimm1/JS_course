let age = 18;

if(age === 18) console.log("ur an adualt"); //strict

if(age == '18') console.log("ur an adualt"); //loose

let myAge = Number(prompt("how old are u? "));

if(myAge === 15) {
    console.log("ur 15");
}else if(myAge === 18){
    console.log("ur 18 and an adualt");
}else{console.log(`ur ${myAge}`)};
