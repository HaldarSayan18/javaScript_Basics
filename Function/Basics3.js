//Concept of Arrow Functions or Fat Arrow Syntax

const add = function (x, y) {
    return console.log(x + y);
}
add(10, 11);

//arrow function
const addition = (x, y) => {
    return console.log(x * y);
}
addition(9, 5);

//single line syntax of arrow function
const div = a => a**2;
console.log(div(10));

//Nested Function in JavaScript

function outer(){
    console.log('outer');
    function inner() {
        console.log('inner');
    }
    inner();
}
outer();

//Concept of Callback Function

/* Callback function is a function that takes function as an arguement based on certain conditions. */

//here suppose 'ele' is a function and we call it into a function named 'callBack'. So here, 'ele' is a call-back function.
function callBack(ele) {
    console.log(ele());
}

//here the function has no name, it's anonymus function
/* foo(function () {
    console.log('Anonymus Function');
}) */

function named () {
    console.log('Another way of callback function');
}
callBack(named);

//callback function according to condition
function callBack2 (bar){
    if(itsNight){
        bar();
    }
    if(isDrinkOverCheck){
        bar();
    }
}