const Hangman = function(word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = ['c']
}

Hangman.prototype.getPuzzle = function() {
    let puzzle = ''

    this.word.forEach(letter => {
        if(this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    });

    return puzzle
}

const instanceOne = new Hangman('cat', 10)
const instanceTwo = new Hangman('Samba Canção', 10)

console.log(instanceOne.getPuzzle());
console.log(instanceTwo.getPuzzle());
