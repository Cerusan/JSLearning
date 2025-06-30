"use strict";

let num = 10;

function showFirstMessage(text) {
    console.log(text);
}

showFirstMessage(`Hello world!`);

//calc(20, 20);                           //Will work
//
//function calc(a, b){                    //Function declaration
//    num = 20
//    return (a+b);
//}

//console.log(calc(40, 40));

console.log(num);

//logger();                             //Wouldn't work

const logger = function(){              //Function expression
    console.log(`Logger worked`)
};

logger();

const calc = (a, b) => a + b;

console.log(calc(50, 50));