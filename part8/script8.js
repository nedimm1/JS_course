//timers:

//setTimeout
//execute after some time

let ingrediants = ['spinach', 'olives']

let pizzaDelivery = setTimeout((ing1, ing2) => console.log(`your pizza with ${ing1} and ${ing2} is deliverd`), 5000, ...ingrediants)

//time is written is miliseconds

console.log('waiting...')

if (ingrediants.includes("spinach")) {
    clearTimeout(pizzaDelivery);
    console.log('sorry we dont have spinach.');
}

//setInterval

setInterval(function(){
    let now = new Date()
    console.log(now)
}, 1000)