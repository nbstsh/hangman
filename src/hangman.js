class Hangman {
    constructor (word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.status = 'playing'
        this.guessedLetters = []
    }
    get puzzle () {
        let puzzle = ''
        this.word.forEach((letter) => {
            puzzle += this.guessedLetters.includes(letter) || letter === ' ' ? letter : '*'
        })
        return puzzle
    }
    checkLetter(letter) {
        if (this.status !== 'playing') return

        letter = letter.toLowerCase()
        if (this.guessedLetters.includes(letter)) return

        if (!this.word.includes(letter)) {
            this.remainingGuesses--
        }

        this.guessedLetters.push(letter)
    }
}


export { Hangman as default } 