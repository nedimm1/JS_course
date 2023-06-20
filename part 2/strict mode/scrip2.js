//strict mode is a mode that we can activate and that helps us write more secure JS code
//strict mode is activated like this:
'use strict';

//strict mode helps us detect accidental errors
//for example:

let hasDriversLiscance = false;

const passedDrivingTest = true;

if(passedDrivingTest) hasDriverLiscance = true //"accidentally made a mistake"
if(hasDriversLiscance) console.log("U can drive")

//a small error like this would have went undetected if the strict mode was not activated
//with strict mode activated we would get an error in the console infroming us that about this mistake