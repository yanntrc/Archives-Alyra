const { redBright, blueBright } = require('chalk')
const chalk = require('chalk')
const readlineSync = require('readline-sync')

let questionsArray = [
    ['Question 1: Le C++ est un: \n 1: langage \n 2: compilateur', 1],
    ['Question 2: TypeScript est une évolution de Javascript: \n 1: Vrai  \n 2: Faux', 1],
    ['Question 3: Lire les cours avant de faire les exercices est inutile: \n 1: Vrai \n 2: Faux', 2],
    ['Question 4: React.js a été developpé par Google: \n 1: Vrai \n 2: Faux', 2],
    ['Question 5: Ethereum est une blockchain publique: \n 1: Vrai \n 2: Faux', 1]
]

let testPointsCounter = 0
for (i = 0; i < questionsArray.length; i++) {
    if (i % 2 === 0) {
        console.log(chalk.italic(questionsArray[i][0]))
        console.log(chalk.italic('Quelle est la bonne réponse? 1 ou 2?: '))
    }
    if (i % 2 === 1) {
        console.log(chalk.bold(questionsArray[i][0]))
        console.log(chalk.bold('Quelle est la bonne réponse? 1 ou 2?: '))
    }

    let tmp = Number(readlineSync.question(''))

    if (isNaN(tmp)) {
        tmp = Number(readlineSync.question('Veuillez entrer un nombre. Quelle est la bonne réponse? 1 ou 2?: '))
    }

    if (tmp === questionsArray[i][1]) {
        testPointsCounter++
        console.log(chalk.green('Bonne réponse!'))
    } else {
        console.log(chalk.red('Mauvaise Réponse.'))
    }
}
console.log(chalk.bold.blue(`Vous avez obtenu ${testPointsCounter} bonnes réponses.\n\
             Votre note est de ${testPointsCounter}/${questionsArray.length}.`))
process.exit(1)