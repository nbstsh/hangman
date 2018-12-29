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
    recalculatingStatus() {
        const isMatch = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

        if (this.remainingGuesses === 0) {
            this.status = 'failed'
        } else if (isMatch) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    get message() {
        const message = {
            playing: `Guesses left: ${this.remainingGuesses}`,
            failed: `Nice try! The word was "${this.word.join('')}".`,
            finished: 'Great work! you guessed the word!'
        }
        return message[this.status]
    }
}


export { Hangman as default } 