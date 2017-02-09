// Hangman game


// variables
var inquirer = require('inquirer');
var letter = require('./Letter.js');
var word = require('./Word.js');
var letters = [];
// functions
function newLetter(){
    inquirer.prompt([
      {type: "input",
        name: "letterGuess",
        message: "Guess a letter in the word I'm thinking of:"}

    ]).then(function(data){
          if (data.letterGuess == indexOf(letters)) {
          	console.log("You already guessed that letter! Try again!");
          	newLetter();
          }else{

          }
    });
}

//1. Show directions. 
console.log("Hangman has begun!")
console.log("Guess a letter in the word I'm thinking of before your chances run out!")

//2. prompt for a letter. (if letter was already guessed, have them guess again with no turn penalty.)
newLetter();

//3. if letter is correct, fill in blanks associated.  (indicate letters guessed already?)

//4. if letter is incorrect, indicate how many chances left.

//5. if word is filled in, display "Winner!" and give prompt to play again.

//6. if chances run out before the user guesses the word, "Game over!"
