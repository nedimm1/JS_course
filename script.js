/* console.log(50 + 50 - 40);

let name = "Nedim";
let age = 20;

console.log("my name is: ", name, "i am", age, "years old")

let country = "Serbia";

let continent = "Europe";

let population = "8.6 milion"

console.log(country, continent, population);

let isIsland = false;

let language;

let population = 8639112;

let country = "Serbia";

console.log(typeof isIsland)
console.log(typeof language)
console.log(typeof population)
console.log(typeof country)


let languagesAlsoSpoken;

languagesAlsoSpoken = "serbian, bosnian and croatian";

const nativeLanguage = "serbian";

var otherLanguages;

otherLanguages = "serbian", "bosnian", "croatian"


let serbiaPopulation = 8639112;

let halfOfSerbia = serbiaPopulation / 2;

serbiaPopulation++;

let finlandPopulation = 565234;

let averagePopulation = 39999999;

console.log(serbiaPopulation);

console.log(halfOfSerbia);

console.log(serbiaPopulation > averagePopulation);

console.log(serbiaPopulation > finlandPopulation);


let markWeight = 78;

let markHight = 1.69;

let jhonWeight = 92;

let jhonHight = 1.88;

let markBMI = markWeight / markHight ** 2;

let jhonBMI = jhonWeight / (jhonHight * jhonHight);

console.log(jhonBMI);

console.log(markBMI);

let markHigherBMI = markBMI > jhonBMI

console.log(markHigherBMI);


const name = "Nedim";

const occupation = "student";

const schoolName = "Madrasa in Novi pazar";

const currentYear = 2023;

const birthyear = 2008;

console.log("hi i am " + name, ", i am a " + occupation, "at a " + schoolName, ", and i am " + (currentYear - birthyear), "years old");

console.log(`hi i am ${name}, i am a ${occupation} at a ${schoolName}, and i am ${currentYear - birthyear} years old`)

console.log("a\n\sentance\n\with\n\spaces")


const age = 15;

if(age >= 18){
    console.log("U can drive")
}else{
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


let markWeight = 78;

let markHight = 1.69;

let jhonWeight = 92;

let jhonHight = 1.88;

let markBMI = markWeight / markHight ** 2;

let jhonBMI = jhonWeight / (jhonHight * jhonHight);

if(markBMI > jhonBMI){
    console.log(`Marks BMI(${markBMI}) is higher then Jhons BMI(${jhonBMI})`)
}else{
    console.log(`Jhons BMI(${jhonBMI}) is higher than Marks BMI(${markBMI})`)
}


let num = "2008";

console.log(Number(num), num);

console.log(num + 15);

console.log(Number(num) + 15);

console.log(String(25), 25);



console.log("20" + "20" - 12);

console.log('20' / '5');

let n = '1' + '1';
n = n - 1;

console.log(n);


console.log(Boolean(0));
console.log(Boolean(undefined))
console.log(Boolean('me'))
console.log(Boolean({}))
console.log(Boolean(''))

 let money = 0;
if (money) {
    console.log('dont spend too much')
} else { 
    console.log('no money :(') 
}

let hight;
if(hight){
    console.log("hight is defined")
}else{
    console.log("hight is not defined")
}


let age = 18;

if(age === 18) console.log("ur an adualt"); //strict

if(age == '18') console.log("ur an adualt"); //loose

let myAge = Number(prompt("how old are u? "));

if(myAge === 15) {
    console.log("ur 15");
}else if(myAge === 18){
    console.log("ur 18 and an adualt");
}else{console.log(`ur ${myAge}`)};


let NedHasLiscence = true;

let NedCanSeeGood = false;

let NedIsTired = true

if(NedHasLiscence && NedCanSeeGood && !NedIsTired){
    console.log("Ned can drive");
}else{
    console.log("Ned cant drive");
}
*/

let teamOneScore = (97 + 112 + 81) / 3;

let teamTwoScore = (109 + 95 + 86) / 3;

console.log(teamOneScore);

console.log(teamTwoScore);

if(teamOneScore > teamTwoScore && teamOneScore >= 100){
    console.log("team one wins")
}else if(teamTwoScore > teamOneScore && teamTwoScore >=100){
    console.log("team two wins")
}else if(teamOneScore === teamTwoScore && teamOneScore >= 100 && teamTwoScore >= 100){
    console.log("both win")
}else{
    console.log('no one wins')
}