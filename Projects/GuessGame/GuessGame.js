'use strict';

/* 
console.log(document.querySelector('#message').textContent);    // this will show only the text in the <p> with id=message
*/

let secretNum = Math.trunc(Math.random() * 20) + 1;
console.log(secretNum);
let score = 20;
// document.querySelector('.score').textContent = 10;

document.querySelector('.guessNum').value = '';
console.log(document.querySelector('.guessNum').value);

document.querySelector('.btn-check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guessNum').value);    // changed the typeof(guess) = Number
    console.log(guess, typeof (guess));

    // no input
    if (!guess) {
        document.querySelector('#message').textContent = "❌ No Number!";
    }
    // guessed correct number 
    else if (guess === secretNum) {
        document.querySelector('#message').textContent = "🎉 Correct Number!";
        document.querySelector('.number').textContent = secretNum;
        document.querySelector('header').style.backgroundColor = '#3feb25d1';
        document.querySelector('main').style.backgroundColor = '#3feb25d1';
        document.querySelector('body').style.border = '2px ridge #3feb25d1';
        document.querySelector('.highScore').textContent = score;
    }
    // guess is too high 
    else if (guess > secretNum) {
        if (score > 1) {
            document.querySelector('#message').textContent = "📈 Guess is too High!";
            score--;
            document.querySelector('.score').textContent = score;
            // document.querySelector('.highScore').textContent = score;
        } else {
            document.querySelector('#message').textContent = "🏳️ You lost the Game!";
            document.querySelector('.number').textContent = secretNum;
            document.querySelector('.score').textContent = 0;
            document.querySelector('header').style.backgroundColor = '#ff0505c1';
            document.querySelector('main').style.backgroundColor = '#ff0505c1';
            document.querySelector('body').style.border = '2px ridge #ff0505c1';
        }
    }
    // guess is too low 
    else if (guess < secretNum) {
        if (score > 1) {
            document.querySelector('#message').textContent = "📉 Guess is too Low!";
            document.querySelector('.score').textContent = score - 1;
            score--;
            // document.querySelector('.highScore').textContent = score;
        } else {
            document.querySelector('#message').textContent = "🏳️ You lost the Game!";
            document.querySelector('.number').textContent = secretNum;
            document.querySelector('.score').textContent = 0;
            document.querySelector('header').style.backgroundColor = '#ff0505c1';
            document.querySelector('main').style.backgroundColor = '#ff0505c1';
            document.querySelector('body').style.border = '2px ridge #ff0505c1';
        }
    }
})

// eventListner for Again button
document.querySelector('.btn-again').addEventListener('click', function () {
    score = 20;
    secretNum = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('#message').textContent = "Start guessing...";
    document.querySelector('.number').textContent = "?";
    document.querySelector('.score').textContent = score;
    document.querySelector('.highScore').textContent = 0;
    document.querySelector('.guessNum').value = '';
    document.querySelector('header').style.backgroundColor = '#e5c459d1';
    document.querySelector('main').style.backgroundColor = '#e5c459d1';
    document.querySelector('body').style.border = '2px ridge #e5c459d1';
})