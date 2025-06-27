"use strict";

let number = 4.6;               //numeric

console.log(4/0);               //Infinity
console.log('string' * 9);      //NaN

const person = `Oleg`;          //string

const bool = true;              //bool

//console.log(something);       //null

let und;
console.log(und);               //undefined

const obj = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(obj.name);        //better practice
//console.log(obj["name"]);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp', 6];       //array 
console.log(arr[1]);