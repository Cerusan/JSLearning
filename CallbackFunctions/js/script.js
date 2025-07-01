"use strict";

function first() {
    // Do something

    setTimeout(function() {
        console.log(`1`);
    }, 500);
}

function second() {
    console.log(`2`);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`I'm learning ${lang}`);
    callback();
}

learnJS(`JavaScript`, function() {
    console.log(`I completed that lesson`);
});

function done() {
    console.log(`Me too completed that lesson`);
}

learnJS(`Java`, done);