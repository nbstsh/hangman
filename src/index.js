import Hangman from './hangman'
import { getPuzzle } from './request'

const remainingGuesses = 5
const game = new Hangman('default', remainingGuesses)
const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const messageEl = document.querySelector('#message')

const render = () => {
    renderPuzzleDOM()
    renderGuessesDOM()
    renderMessageDOM()
}

const renderPuzzleDOM = () => {
    puzzleEl.innerHTML = ''

    game.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
}

const renderGuessesDOM = () => {
    guessesEl.innerHTML = ''

    if (game.status === 'playing') {
        guessesEl.textContent = game.message
    }
}

const renderMessageDOM = () => {
    messageEl.innerHTML = ''

    if (game.status !== 'playing') {
        messageEl.textContent = game.message
    }
}


window.addEventListener('keydown', (e) => {
    game.checkLetter(e.key.toLowerCase())
    game.recalculatingStatus()
    render()
})

document.querySelector('#reset').addEventListener('click', (e) => {
    game.reset()
    render()
})

render()