'use strict';

function cutIntoPieces(fruit){
    return fruit * 4
}

function fruitProcessor(apple, orange) {
    const applePieces = cutIntoPieces(apple);
    const orangePieces = cutIntoPieces(orange);
    
    console.log(apple, orange);
    const juice = `a juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
  }

  console.log(fruitProcessor(4, 2));

