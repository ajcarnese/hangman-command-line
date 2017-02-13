function Letter(letter){
	this.letter = letter;
	this.found = false;
	this.display = function(){
		//if found is true, the return the letter, otherwise show a blank
		if (this.found) return " " + this.letter + " ";
		else return ' __ ';
	}
}

module.exports = Letter;