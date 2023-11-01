'use strict';

const resturant = {
    name: 'N.I.F',
    location: "Washington street, Van Wert, Ohio, USA",
    categories: ["from Ohio", "Halal", "made up", "adfjas'ljfasio;j", "a;kdjfha;weouhngva"],
    starterMenue: ["American breakfast", "English breakfast", "French breakfast", "Turkish breakfast"],
    arryay: ['one', 'two', 'three', 'four', 'five'],
    order: function(starterIndex, mainIndex) {
        // Use square brackets to create an array with the selected items
        return [this.starterMenue[starterIndex], this.arryay[mainIndex]];
    }
};

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
