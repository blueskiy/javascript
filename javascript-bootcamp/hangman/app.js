'use strict'

const game = new Hangman('car parts', 7)

const hangmanRender = (game) => {
    const hangmanEl = document.querySelector('#hangman')
    const puzzleEl = document.createElement('span')
    const remainingGuessesEl = document.createElement('span')

    puzzleEl.className = 'puzzle'
    remainingGuessesEl.className = 'remaining-guesses'

    hangmanEl.innerHTML = ''
    hangmanEl.appendChild(puzzleEl)
    hangmanEl.appendChild(remainingGuessesEl)

    puzzleEl.textContent = game.puzzle
    remainingGuessesEl.textContent = game.statusMessage
}

hangmanRender(game)

window.addEventListener('keypress', (event) => {
    if(game.status !== 'playing') {
        return
    }

    const guess = String.fromCharCode(event.charCode)
    
    game.makeGuess(guess)
    game.gameStatus()
    hangmanRender(game)
    console.log(game.status);
})

getPuzzle('4', (error, puzzle) => {
    if(error) {
        console.log(`Error: ${error}`);
    } else {
        console.log(puzzle)
    }
})

getCountry('US', (error, country) => {
    if(error) {
        console.log(`Error: ${error}`);
    } else {
        console.log(country.name)
    }
})
