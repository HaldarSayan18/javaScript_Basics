//Function Declaration

function printMe() {
  console.log('Printing...');
}
// printMe();

/* "Parameter" is  something that you pass to a function while  declaring or defining.
But when you call or invoke this function, the actual value you pass to it is called the "Arguements" */

function printIt(parameter) {
  console.log(parameter);
}
// printIt('Haldar');

//function declaration using expressions

const print = function (a, b) {
  console.log('function declaration using expressions');
  console.log(a * b);

}
print();
print(10, 20);

/* let p = x(); //undefined */
//return a function

function sum(a, b) {
  let res = a + b;
  return res;
}
console.log(sum(8,6));


function calculate(x, y) {
  return (2 * (x + y));
}
console.log(calculate(2, 3));
console.log(calculate(5));


/* Rest parameters */
// Rest parameter is something that allows a function to accept any number of arguements as an array.
// In a function there must be only one rest parameter.
// "...y" -> this parameter becomes rest parameter.

function collectThings(x, ...y) {
  console.log(x);
  console.log(y);
}
collectThings(1, 2, 3, 4, 5, 6)