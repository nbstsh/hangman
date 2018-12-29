import Hangman from './hangman'
import { getPuzzle } from './request'

const setting = {
    remainingGuesses: 10,
    wordCount: 2
}

let game = new Hangman('default', setting.remainingGuesses)
const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const messageEl = document.querySelector('#message')


const startGame = async () => {
    const word = await getPuzzle(setting.wordCount)
    game = new Hangman(word, setting.remainingGuesses)
    render()
}


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



startGame()