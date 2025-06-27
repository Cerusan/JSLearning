"use strict";

//alert('Eye have you');                                        //Just a message

//const result = confirm("Do you know the way?");               //Confirmation message
//console.log(result);

//const answer = prompt("How are you", "Fine");                   //Answer prompt from user(You can add + before prompt, and then you'll get number from user)
//console.log(answer);
//console.log(typeof(answer));

//const answer = +prompt("How old are you?", "18");
//console.log(typeof(answer));
//console.log(answer);
//if (answer >= 18){
//    console.log("Welcome!");
//}
//else {
//    console.log("You're not old enough");
//}

const answers = [];

answers[0] = prompt(`What's your name?`, ``);
answers[1] = prompt(`How old are you?`, ``);
answers[2] = prompt(`What's your favorite color?`, ``);
answers[3] = prompt(`What's your favorite hobby?`, ``);

document.write(answers);

//alert, confirm and prompt will not work in console, only browser