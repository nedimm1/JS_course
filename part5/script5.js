'use strict'

const resturant = {
   name: 'N.I.F',
   location: "Washington street, Van Wert, Ohio, USA",
   categories: ["from Ohio", "Halal", "made up"],
   starterMenue: ["American breakfest", "English breakfest", "French breakfest", "Turkish breakfest"],

}

const arr = [1, 2, 3]
const a = arr[0]
const b = arr[1]
const c = arr[2]

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr)

let [first, second] = resturant.categories
console.log(first, second)

//switching elements without destructing
const temp = first;
first = second;
second = temp;
console.log(first, second)