let password = '1a2b!errtyukjhgfdg'
const crackme6 = (password) => {
    if (password[0] === '1' && password[1] === 'a' && password[2] === '2' && password[3] === 'b' && password[4] === '!' && password.length > 13) {
        console.log('OK')
    } else {
        console.log('BAD')
    }
}
crackme6(password)