"use strict";

let num = 50;

//while (num <= 55) {
//    console.log(num);
//    num++;
//}

do {
    console.log(num);
    num++;
} 
while (num <= 55);

for (let i = 1; i < 10; i++) {
    //if (i == 6) {
        //break;
    //}
    if (i % 2 == 0){
        console.log(`I'm skipping ${i}`)
        continue;
    }

    console.log(i);
}