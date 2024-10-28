function display(result) {
    console.log(result);
}

function add (num1, num2, myCallback){
    let sum = num1 + num2
    myCallback(sum)
}

add(10, 20, display)
// output => 7      30




//anonymous functions
let sum = function(x,y){
    return x+y
}
console.log(sum(10,30));


(
    function(){
    console.log("Welcome to basics of js");
}
)();
//setTimeout is also an example of anonymous function