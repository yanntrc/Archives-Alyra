const chalk = require('chalk')
const readlineSync = require('readline-sync')

let targetValue = Number(process.argv[2])
let userGuess = Number(readlineSync.question(chalk.bold('Try a number: ')))

while (isNaN(userGuess)) {
    userGuess = Number(readlineSync.question(chalk.yellow('Please input a ') + chalk.yellow.underline('number') + ': '))
}

while (userGuess !== targetValue) {

    if (isNaN(userGuess)) {
        console.log(chalk.yellow('Please input a ') + chalk.yellow.underline('number') + ': ')
    }
    if (userGuess < targetValue) {
        console.log(chalk.red('Nombre trop petit.'))
    }
    if (userGuess > targetValue) {
        console.log(chalk.red('Nombre trop grand.'))
    }
    userGuess = Number(readlineSync.question(chalk.bold('Try again: ')))

}

console.log(chalk.green('Bravo!'))
process.exit(1)