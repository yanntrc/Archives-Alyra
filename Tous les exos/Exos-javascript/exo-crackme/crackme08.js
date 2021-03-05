// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = '2 2   426'

const crackme8 = (password) => {
    let tmp1 = password.split('').slice(-3, -1).join('')
    if (Number(tmp1) === 42) {
        console.log('GOOD')
    } else {
        console.log(Number(tmp1))
        console.log('BAD')
    }
}
console.log(crackme8(password))