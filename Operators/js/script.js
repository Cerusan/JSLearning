"use strict";

//Concatenation
console.log('arr' + " - object");           //result: arr - object
console.log(4 + ' - object');               //result: 4 - object
console.log(4 + +' - object');              //result: NaN
console.log(4 + +'5');                      //result: 9

let incr = 10,
    decr = 10;

//incr++;         //Incrementation
//decr--;         //Decrementation

//console.log(incr++);          //result = 10
//console.log(decr--);          //result = 10

console.log(++incr);            //result = 11
console.log(--decr);            //result = 9

console.log(5%2);               //remainder of division

console.log(2*4 == '8');        //It works, and result will be true(checks only result)
console.log(2*4 === '8');       //That syntax also checks data types, result is false

const   isChecked = true,
        isClose = true;

console.log(isChecked && isClose);          // AND
console.log(isChecked || isClose);          // OR
console.log(!isClose);                      // NOT