//Concept of Higher Order Function

/* 
1. HOF takes one or more functions as arguements
2. It may return a function
*/
function getCapture (camera) {
    camera();
}
getCapture(function() {
    console.log('Canon');
});

//Concept of Pure & Impure Function

//Pure Function means which function produces same output for the same input.

// function sayGreet(name) {
//     return `Hi ${name}`    
// }
// console.log(sayGreet("Sayan"));

let greeting = "Hello";
function sayGreet (name){
    return `${greeting} ${name}`;
}
console.log(sayGreet('Haldar'));


