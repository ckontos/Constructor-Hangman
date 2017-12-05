//This page picks a word and exports the word's letters to word.js and letter.js

var letter = require('./letter.js');

var wordItems = {
    words: ["INTERSTELLAR", "STRANGERS", "INCEPTION", "INSURGENT", "JUMANJI", "TED", "NEIGHBORS", "SPECTRUM", "CREED"],
    randNum: 0,
    chosenWord: "",
    wordLetters: [],
    pickWord: function() {
        this.randNum = Math.floor(Math.random() * this.words.length);
        this.chosenWord = this.words[this.randNum];
        this.wordLetters = this.chosenWord.split("");
    }
};

//module.exports = wordItems
exports.toWordJS = wordItems;
exports.toLetterJS = wordItems;
exports.toMainJS = wordItems;
