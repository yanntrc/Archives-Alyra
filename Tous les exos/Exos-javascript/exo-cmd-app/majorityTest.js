const readlineSync = require('readline-sync')

let age = readlineSync.question('Please input your age: ')
let firstName = readlineSync.question('Please input your first name: ')
let lastName = readlineSync.question('Please input your last name: ')

if (isNaN(age)) {
    console.log('Please input Number as your age.')
    process.exit(1)
}

if (age < 18) {
    console.log(`Désolé, ${firstName} ${lastName}, vous êtes mineur, vous ne pouvez pas voter.`)
} else {
    console.log(`${firstName} ${lastName}, vous êtes majeur, vous pouvez voter`)
}