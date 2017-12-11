var game = require("./game.js");
var word = require("./word.js");
var letter = require("./letter.js");

//npm for inquirer 
var inquirer = require("inquirer");

var playerStuff = {
    userLetter: "",
    roundComplete: false,
    startGame: function() {
        console.log("\nWELCOME TO HANGMAN: MOVIE EDITION!\n");
        game.toMainJS.pickWord();
        //console.log(game.toMainJS.chosenWord);
        letter.toMainJS.displayNewGuess();

        promptUser();
    },
    startRound: function() {
        this.roundComplete = false;

        game.toMainJS.pickWord();
        //console.log(game.toMainJS.chosenWord);
        letter.toMainJS.displayNewGuess();

        promptUser();
    },
    resetVariables: function() {
        letter.toMainJS.correctGuessesArr = [];
        word.toMainJS.allGuesses = [];
        word.toMainJS.incorrectGuesses = [];
        word.toMainJS.correctGuesses = [];
        word.toMainJS.letterMatch = null;
        word.toMainJS.letterRepeat = null;
        word.toMainJS.guessesRemaining = 12;
    }
};


var promptUser = function() {
    inquirer.prompt([{
        name: "letter",
        message: "Pick a letter: ",
        validate: function(value) {
            if (isNaN(value) === true) {
                return true;
            }
            else {
                return false;
            }
        }
    }]).then(function(answers) {

        console.log("--------------------------------- \n");

        // store/push letter into an array
        playerStuff.userLetter = answers.letter;
        playerStuff.userLetter = playerStuff.userLetter.toUpperCase();
        word.toMainJS.allGuesses.push(playerStuff.userLetter);

        //Check the user pick against the random word
        word.toMainJS.checkRepeat();

        //display the underscore or the letter if correct
        letter.toMainJS.displayNewGuess();


        console.log("Guesses remaining: " + word.toMainJS.guessesRemaining);

        //function to check if the game is still going
        letter.toMainJS.checkProgress();

        if (playerStuff.roundComplete === false) {
            promptUser();
        }
        else if (playerStuff.roundComplete === true) {
            playerStuff.startRound();
        }

    });

};

playerStuff.startGame();

exports.toWordJS = playerStuff;
exports.toLetterJS = playerStuff;
