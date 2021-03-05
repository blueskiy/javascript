class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    get puzzle() {
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
    makeGuess(character) {
        character = character.toLowerCase()
        const badGuess = !this.word.includes(character)
        const findCharacter = this.guessedLetters.find(letter => letter === character)
    
        if(findCharacter) {
            console.log('Character already tried');
            return
        }
    
        this.guessedLetters = [...this.guessedLetters, character]

        if(badGuess) {
            this.remainingGuesses--
        }
    }
    gameStatus() {
        const remainingGuesses = this.remainingGuesses
        const guessedLetters = this.guessedLetters
        const word = this.word
    
        if(word.every(letter => guessedLetters.includes(letter) || letter === ' ')) {
            this.status = 'finished'
            return
        }
    
        if(remainingGuesses === 0) {
            this.status = 'failed'
        }
    }
    get statusMessage() {
        if(this.status === 'finished') {
            return 'Nice work! You guessed the word.'
        } else if(this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}".`
        } else {
            return `Guesses left: ${this.remainingGuesses}`
        }
    }
}

export { Hangman as default }