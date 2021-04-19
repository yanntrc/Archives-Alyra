const guess = (userGuess, secret) => {
    if (userGuess < secret) {
        console.log('Too small!')
    } else if (userGuess > secret) {
        console.log('Too big!')
    } else {
        console.log('You win')
    }
}

guess(100, 100)