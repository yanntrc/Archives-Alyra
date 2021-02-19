let numbers = [10,
    15,
    16,
    5005,
    52390903,
]
let bases = [2,
    8,
    16,
]

console.log('--------')
console.log('Résultats en binaire')
for (let number of numbers) {
    console.log(`${number} = ${number.toString(bases[0])}`)
}
console.log('--------')
console.log('Résultats en octal')
for (let number of numbers) {
    console.log(`${number} = ${number.toString(bases[1])}`)
}
console.log('--------')
console.log('Résultats en hexadecimal')
for (let number of numbers) {
    console.log(`${number} = ${number.toString(bases[2])}`)
}