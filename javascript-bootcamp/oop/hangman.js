const Hangman = function(word, remainingGuesses) {
    this.word = word
    this.remainingGuesses = remainingGuesses
}

const instanceOne = new Hangman('cat', 10)
const instanceTwo = new Hangman('butterfly', 10)

console.log(instanceOne);
console.log(instanceTwo);