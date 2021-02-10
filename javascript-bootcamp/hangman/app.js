'use strict'

let game

const hangmanEl = document.querySelector('#hangman')
const puzzleEl = document.createElement('span')
const remainingGuessesEl = document.createElement('span')
const resetButtonEl = document.createElement('button')

puzzleEl.className = 'puzzle'
resetButtonEl.textContent = 'Reset'
resetButtonEl.setAttribute('id', 'reset')
remainingGuessesEl.className = 'remaining-guesses'

hangmanEl.appendChild(puzzleEl)
hangmanEl.appendChild(remainingGuessesEl)
hangmanEl.appendChild(resetButtonEl)

const render = () => {
    puzzleEl.textContent = game.puzzle
    remainingGuessesEl.textContent = game.statusMessage
}

const newGame = async () => {
    const puzzle = await getPuzzle('2')
    game = new Hangman(puzzle, 7)
    render()
}

window.addEventListener('keypress', (event) => {
    if(game.status !== 'playing') {
        return
    }

    const guess = String.fromCharCode(event.charCode)
    
    game.makeGuess(guess)
    game.gameStatus()
    render()
})

document.querySelector('#reset').addEventListener('click', newGame)

newGame()

// getPuzzle('4').then((puzzle) => {
//     console.log(`Puzzle, brother: ${puzzle}`)
// }).catch((err) => {
//     console.log(err);
// })

// getCurrentCountry().then((country) => {
//     console.log(country.name);
// }).catch((error) => {
//     console.log(error);
// })