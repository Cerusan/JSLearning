"use strict";

if (4 == 9) {
    console.log(`hehe`);
} else {
    console.log(`not hehe`);
}

const num = 50;

//if (num < 49) {
//    console.log(`num is lower than 49`);
//} else if (num > 100) {
//    console.log(`num is higher than 100`);
//} else {
//    console.log(`num is between 49 and 100`);
//}
//
//(num == 50) ? console.log(`num is 50`) : console.log(`num is not 50`);


switch (num) {
    case 49:
        console.log(`num is 49`);
        break;
    case 100:
        console.log(`num is 100`);
        break;
    case 50:
        console.log(`num is 50`);
        break;
    default:
        console.log(`num is outside our cases`);
        break;
}