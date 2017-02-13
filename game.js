var inquirer = require('inquirer')
var Word = require('./Word.js');

var words = ['javascript', 'bootstrap', 'node'];
var wordToPlay = words[Math.floor(Math.random()*words.length)];
var attempts = 0;

//welcome message
console.log(' ')
console.log('Welcome to the easiest Hangman game ever!')
console.log('(where the hangman is too lazy to count your chances!)')
console.log("")

var wordObject = new Word(wordToPlay);
wordObject.parseWord();
console.log(wordObject.display());

function askLetter(){
    inquirer.prompt([
    {
    type: "input",
    name: "guess",
    message: "Try to guess a letter from the word above. If you are done then type 'i-win'."},
    ]).then(function(data){
        // for (var i=0; i<this.wordObject.length; i++){
        //     if 
        if (data.guess != 'i-win') {
            wordObject.updateLetter(data.guess);

            console.log(wordObject.display());

            askLetter();
        }else{
            console.log("   ")
            console.log("********************************")
            console.log ('Winner winner chicken dinner!')
            console.log("********************************")
        }
    });
}


console.log("  ")
console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
askLetter();