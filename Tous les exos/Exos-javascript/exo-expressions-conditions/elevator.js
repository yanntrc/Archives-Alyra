const chalk = require('chalk')
let terminalInput = process.argv
let currentFloor = 0
let targetFloor = parseInt(terminalInput[2])

switch (targetFloor) {
    case currentFloor:
        console.log(chalk.red('Vous êtes déja à cet étage.'))
        break
    case -2:
        console.log(`Vous vous rendez à l'étage n° ${chalk.blue(targetFloor)}.`)
        break
    case -1:
        console.log(`Vous vous rendez à l'étage n° ${chalk.magenta(targetFloor)}.`)
        break
    case 0:
        console.log(`Vous vous rendez à l'étage n° ${chalk.yellow(targetFloor)}.`)
        break
    case 1:
        console.log(`Vous vous rendez à l'étage n° ${chalk.blueBright(targetFloor)}.`)
        break
    case 2:
        console.log(`Vous vous rendez à l'étage n° ${chalk.magentaBright(targetFloor)}.`)
        break
    case 3:
        console.log(`Vous vous rendez à l'étage n° ${chalk.yellowBright(targetFloor)}.`)
        break
    case 4:
        console.log(`Vous vous rendez à l'étage n° ${chalk.bgCyan(targetFloor)}.`)
        break
    case 5:
        console.log(`Vous vous rendez à l'étage n° ${chalk.bgGreen(targetFloor)}.`)
        break
    case 6:
        console.log(`Vous vous rendez à l'étage n° ${chalk.bgGreenBright(targetFloor)}.`)
        break
    case 7:
        console.log(`Vous vous rendez à l'étage n° ${chalk.blackBright(targetFloor)}.`)
        break
    default:
        console.log(chalk.red('Cet etage n\'existe pas.'))
        break
}