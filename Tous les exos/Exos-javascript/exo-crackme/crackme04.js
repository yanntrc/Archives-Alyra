// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = 'ddddddddddddd%'

const crackme4 = (password) => {
    let tmp1 = 0
    for (let i = 0; i < password.length; ++i) {
        tmp1 += password.charCodeAt(i)
    }
    if (tmp1 === 1337) {
        console.log('GOOD')
    } else {
        console.log(tmp1)
        console.log('BAD')
    }
}


console.log(crackme4(password))