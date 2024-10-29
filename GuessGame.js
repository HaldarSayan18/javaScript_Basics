//guessing game
//guess a number from 1 to 10
//generate a random number between 1 to 10
//If the guess number matches 
//ru the game for 10 times
//show the number of won and loss


var numofWon = 0;
var numofLoss = 0;
//The parseInt function converts its first argument to a string, parses that string, then returns an integer

//it means it will generate a random number in between 0 to 9
//floor is used to take only absolute value, no decimal values

for (var index = 0; index <= 10; index++) {
    var guessNum = parseInt(prompt("Enter a number between 1 to 10 = "));
    var randomNum = Math.floor(Math.random() * 10) + 1
    if (guessNum == randomNum) {
        console.log("Hurrah!! You have won");
        numofLoss++;
    } else {
        console.log("Bad luck! You have lossed \n Random number was = "+randomNum);
        numofLoss++;
    }
}
document.write("Number of Won: "+numofWon+ "<br>");
document.write("Number of Lossed: "+numofLoss+ "<br>");
