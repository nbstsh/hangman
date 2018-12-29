class Hangman {
    constructor (word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.status = 'playing'
        this.message = ''
        this.guessedLetters = ''
    }
}


export { Hangman as default } 