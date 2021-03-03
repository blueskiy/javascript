import Hangman from './hangman'
import getPuzzle from './requests'

let game

const hangmanEl = document.querySelector('#hangman')
const puzzleEl = document.createElement('div')
const remainingGuessesEl = document.createElement('p')
const resetButtonEl = document.createElement('button')

puzzleEl.className = 'puzzle'
resetButtonEl.textContent = 'Reset'
resetButtonEl.className = 'button'
resetButtonEl.setAttribute('id', 'reset')
remainingGuessesEl.className = 'remaining-guesses'

hangmanEl.appendChild(puzzleEl)
hangmanEl.appendChild(remainingGuessesEl)
hangmanEl.appendChild(resetButtonEl)

const render = () => {
    puzzleEl.innerHTML = ''
    remainingGuessesEl.textContent = game.statusMessage

    const letters = game.puzzle.split('')

    letters.forEach(letter => {
        const letterElement = document.createElement('span')
        letterElement.textContent = letter
        puzzleEl.appendChild(letterElement)
    });
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
