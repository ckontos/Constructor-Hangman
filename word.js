//This JS page takes in the word's letters from game.js and the user input from main.js to determine
//if any repeats or previous matches exist. Then it exports the the array of correct guesses to letter.js

var game = require("./game.js");
var main = require("./main.js");


var wordObject = {
    allGuesses: [],
    incorrectGuesses: [],
    correctGuesses: [],
    letterMatch: null,
    letterRepeat: null,
    guessesRemaining: 12,
    loseCount: 0,
    winCount: 0,


    checkRepeat: function() {
        var repeatCounter = -1;


        //if what the user puts in equals a letter in the word the counter increases
        for (var i = 0; i < this.allGuesses.length; i++) {
            if (main.toWordJS.userLetter == this.allGuesses[i]) {
                repeatCounter++;
            }
        }
        //letterrepeat = false means no matches were found
        if (repeatCounter == 0) {
            this.letterRepeat = false;
            this.checkMatch();
        }
        else {
            this.letterRepeat = true;
            this.checkMatch();
        }


    },
    checkMatch: function() {
        var matchCounter = 0;

        //if the letter guesses matches the word at the specific point in the word increase the counter.
        for (var i = 0; i < game.toWordJS.wordLetters.length; i++) {
            if (main.toWordJS.userLetter == game.toWordJS.wordLetters[i]) {
                matchCounter++;
            }
        }

        if (matchCounter == 0) {
            this.letterMatch = false;
            this.checkMatchRepeat();
        }
        else {
            this.letterMatch = true;
            this.checkMatchRepeat();
        }
    },
    checkMatchRepeat: function() {
        //repeat letter guessesd removed from variable....pop() removesw the last added element
        if (this.letterRepeat == true) {
            this.allGuesses.pop(main.toWordJS.userLetter);

            return true;
        }
        //Puts the userletter in incorrectGuesses if no match is found
        if (this.letterRepeat == false && this.letterMatch == false) {
            this.incorrectGuesses.push(main.toWordJS.userLetter);
            this.guessesRemaining--;

            return true;
        }
        //same for correct guess
        if (this.letterRepeat == false && this.letterMatch == true) {
            this.correctGuesses.push(main.toWordJS.userLetter);
            this.guessesRemaining--;

            return true;
        }
    },
};



exports.toLetterJS = wordObject;
exports.toMainJS = wordObject;
