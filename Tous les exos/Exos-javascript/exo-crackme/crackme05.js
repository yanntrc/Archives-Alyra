// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = '4321drowssap'

const crackme5 = (password) => {
        if (password.split('').reverse().join('') === 'password1234') {
            console.log('OK')
        } else {
            console.log('BAD')
        }
    }
    //let test = password.split('').reverse().join('')
    //console.log(test)
console.log(crackme5(password))