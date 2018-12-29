const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200) {
        const result = await response.json()
        console.log(result)
        return result.puzzle
    } else {
        throw new Error('Unable to fetch puzzle data')
    }
}

export { getPuzzle } 