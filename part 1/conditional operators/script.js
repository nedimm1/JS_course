let age = 15;
// age >= 18 ? console.log("i can drive") :
// console.log("i cant drive")

const driverLiscance = age >= 18 ? "i have one" : "i dont have one";

console.log(driverLiscance);

let driverLiscance2;
if(age >= 18){
    driverLiscance2 = "i have one";
}else{
    driverLiscance2 = "i dont have one";
}

console.log(driverLiscance2);

console.log(`i ${age >= 18 ? "have one" : "dont have one"}`)



const bill = 275;

const tip = bill <= 300 && bill >= 50 ? console.log(`total is ${bill} you should tip ${bill * 0.15}`) :
 console.log(`total is ${bill} you should tip ${bill * 0.2}`);

