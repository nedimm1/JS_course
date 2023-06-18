//the switch statement is used to make decisions based on the value of a given expression. 
//It allows you to compare the value of the expression against multiple cases and execute different blocks of code 
//based on the matching case.
const day = prompt("what day is it? ")

switch(day) {
    case 'monday':
        console.log('its monday');
        break;
    case 'tuesday':
        console.log("its tuesday");
        break;
    case 'wednesday':
        console.log("its wednesday");
        break;
    case 'thursday':
        break;
    case 'friday' :
        console.log("its friday");
        break;
    case 'saturday':
        console.log("its saturday");
        break;
    case 'sunday':
        console.log("its sunday");
        break;
    default: //in case expression dosnt match any of the cases the default case is executed
        console.log("thats not a day");                
}