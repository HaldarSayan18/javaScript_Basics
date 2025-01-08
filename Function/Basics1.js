//Global Scope
var x = "hello, GreatStack";
function example(){
    console.log(x)
}
example();
console.log(x)

//function scope
//It i created when a function is declared and only visible within that function where functions are declared

function example(){
    var fs = 'Hello World'
    console.log(fs);
}
example()
console.log(x);

//Block scope
//A block of code is a group of statements that are enclosed in curly braces({})
function example(){
    if(true){
        let bv = "Namaste"
        console.log(bv)
    }
}
example()
console.log(bv)

//output=> bv is not defined
