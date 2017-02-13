var Letter = require('./Letter.js');
var attempts = 0;
var guessedLetters = [];

function Word(word){
    this.word = word;
    this.letters = [];
    this.parseWord = function(){
    	//breaks the word into letters and pushes those letters into this.letters
        for (var i=0; i< this.word.length; i++){
            var lett = new Letter(this.word[i]);
            this.letters.push(lett);
        }
    },
    this.display = function(){
        var str = "";
        for (var i=0; i < this.letters.length; i++){
            str = str + this.letters[i].display();
        }

        return str;
    }
    this.updateLetter = function(guess){
        //check all of the letter objects and see if the guess matches
        //if it does I update that letter's found to true
        for (var i=0; i<this.letters.length; i++){
            if (this.letters[i].letter == guess) this.letters[i].found = true;
            
          //   if ((this.letters[i].letter != guess) && (this.letters[i] != letters.indexOf(guess))){        
		        // 	attempts++;
		        // 	guessedLetters.push(guess);
		        // 	console.log(guessedLetters)
		        // } 
		      }
    }
}


module.exports = Word;
