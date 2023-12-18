'use strict'

const openingHours = {
    mon: {
        open: 8,
        close: 21
    },
    thu: {
        open: 9,
        close: 22
    },
    wed: {
        open: 10,
        close: 23
    }
}

const resturant = {
    name: 'N.I.F',
    location: "Washington street, Van Wert, Ohio, USA",
    categories: ["from Ohio", "Halal", "made up", "adfjas'ljfasio;j", "a;kdjfha;weouhngva"],
    starterMenue: ["American breakfast", "English breakfast", "French breakfast", "Turkish breakfast"],
    arryay: ['one', 'two', 'three', 'four', 'five'],
    order: function (starterIndex, mainIndex) {
        // Use square brackets to create an array with the selected items
        return [this.starterMenue[starterIndex], this.arryay[mainIndex]];
    },
    openingHours,

    orderMenue: function ({ time, addres, number, starterIndex }) {
        console.log(`${number} ${this.starterMenue[starterIndex]}'s will arrive at ${addres} at ${time}`)
    },

    condiments: function (con1, con2, con3) {
        console.log(con1, con2, con3)
    }
};

/*
resturant.orderMenue({
    time: "20:30",
    addres:"Washington street, Van Wert",
    number: 3,
    starterIndex: 2
})

/*
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let main, secondery;

[main, secondery] = resturant.arryay;

[main, secondery] = [secondery, main];

console.log(main, secondery);


const [food, number] = resturant.order(2, 0);
console.log(food, number);

const nested = [1, 1.5, [2, 3]]

const [i,  ,j] = nested
console.log(i, j)
*/
/*
const {name, categories, arryay} = resturant;
console.log(name, categories, arryay)

const {name: Ned, categories: facts, arryay: array} = resturant
console.log(name, categories, arryay)

const {menue = [], starterMenue: starters} = resturant;
console.log(menue, starters)


const obj = {a: 1, b: 2, c: 3};
let a = 15
let b = 21;
({a, b} = obj);
console.log(a, b)

const {wed: {open: o, close: c}} = resturant.openingHours
console.log(o, c)
*/
/*
const arr = [3, 4, 5]
const insteadOfThis = [1, 2, arr[0], arr[1], arr[2]]
console.log(insteadOfThis)


const doThis = [1, 2, ...arr]
console.log(doThis)

console.log(...doThis)

const newArryay = [...resturant.arryay, 'six', 'seven']
console.log(newArryay)

const combine = [...resturant.arryay, ...newArryay]
console.log(combine)

const name = 'Nedim'
const lastname = "Muminovic"
const letters = [...name, "", ...lastname]
console.log(letters)

const pickCondiments = [prompt("chose condiment1: "), prompt("chose condiment2: "), prompt("chose condiment3: ")]

resturant.condiments(...pickCondiments)*/

/*
const [a, b, ...others] = [1, 2, 3, 4, 5]

console.log(a, b, others)

function add(...numbers){
 let sum = 0
 for(let i = 0; i<numbers.length; i++) sum += numbers[i]
 console.log(sum)
}

let x = [22, 43, 52, 66]
add(...x)
*/
/*
console.log('--- OR ---')
//if the first one is true, it will console log it
console.log(3 || 'nedim')

//if none are ture, it will console log the lest one
console.log(undefined || null)

//instead of checking for an element like this:
const check = resturant.guestNumber ? resturant.guestNumber : resturant.guestNumber = 10
console.log(check)

//do this:
const check2 = resturant.guestNumber || 10
console.log(check2)

console.log('--- AND ---')


console.log(false && 'Nedim')
//if the first value is true it will continue until it finds a false value
console.log('Nedim' && 3 && 'blbla' && undefined && 'blabla')
*/
/*
resturant.guestNumber = 0

const check2 = resturant.guestNumber || 10
console.log(check2)

const betterCheck = resturant.guestNumber ?? 10
console.log(betterCheck)*/
/*
const rest1 = {
    name: "Taxim",
    guests: 0
}

const rest2 = {
    name: "NIF",
    owner: 'Me'
}

//rest1.guests ||= 10;

//rest2.guests ||= 10;

rest1.guests ??= 10;

rest2.guests ??= 10;

console.log(rest1)

console.log(rest2)
*/
/*
const menue = [...resturant.starterMenue]

for(let item of menue) console.log(item)

for(let [item, el] of menue.entries()) console.log(`${item + 1}: ${el}`)*/

/*
//instead of checking if the property exists like this:

if(resturant.openingHours.sun.open && resturant.openingHours.mon) console.log(resturant.openingHours.sun)

//do this
console.log(resturant.openingHours.sun ?.open)*/
/*
const properties = Object.keys(openingHours);

let openStr = `we are open on ${properties.length} days: `

for(let day of Object.keys(openingHours)) openStr += `${day}, `

console.log(openStr)*/
/*
const entires = Object.entries(openingHours)

for(let [key, {open, close}] of entires) console.log(`on ${key}, we are open at ${open}, and we close at  ${close}`)*/
/*
const orderSet = new Set(['pizza', 'pasta', 'pizza', 'rissoto', 'pasta'])
console.log(orderSet)

console.log(new Set("Nedim"))

console.log(orderSet.size)
console.log(orderSet.has('Bread'))
console.log(orderSet.has('pizza'))
console.log(orderSet.add('Water'))
console.log(orderSet.add('Water'))
console.log(orderSet.delete('Water'))
console.log(orderSet)
//console.log(orderSet.clear())

for(const order of orderSet) console.log(order)

const staff = ['waiter', 'maneger', 'cook', 'waiter', 'cook']
const staffTotal = [...new Set(staff)]
console.log(staffTotal)*/

/*
const rest = new Map();
rest.set('name', 'N.I.F')

console.log(rest.set(1, 'one'))

rest
.set('categories', ['made up', 'form ohio', 'blblabla'])
.set('location', 'Van Vert, Ohio, USA')
.set('open', 9)
.set('close', 22)
.set(true, 'we are open')
.set(false, "we are closed")

console.log(rest.get(1))
console.log(rest.get('open'), rest.get('close'))

const time = 10

console.log(rest.get(time > rest.get('open') && time < rest.get('close')))

console.log(rest.has(1))
rest.delete(1)
console.log(rest)
//rest.clear()
console.log(rest.size)
console.log(rest.set('heading', document.querySelector('h1')))

const arr = [1, 2, 3]
rest.set('array', arr)
console.log(rest.get('array'))*/

const airline = "air Serbia"
const plane = 'A320'

console.log(airline[0])
console.log(plane[0])
console.log(airline[4])
console.log(plane[2])

console.log(airline.length)
console.log('UuUuUu...blablabla'.length)

console.log(airline.indexOf('r'))
console.log(airline.lastIndexOf('r'))
console.log(airline.indexOf('Serbia'))


console.log(airline.slice(4))
console.log(airline.slice(0, 3))

console.log(airline.slice(0, airline.indexOf(' ') + 1))

console.log(airline.slice(-6))

const planeSeat = function (seat) {
    const s = seat.slice(-1)
    if (s == 'E' || s == "B") {
        console.log('tough luck')
    }else {
        console.log('NICE')
    }
}

planeSeat('11B')
planeSeat('23C')
planeSeat('3E')