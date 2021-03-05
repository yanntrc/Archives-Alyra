let number = 101

console.log('Boucle While')
while (number > 0) {
    console.log(number)
    number -= 2
}


let number2 = 101
console.log('\nBoucle Do-While')
do {
    console.log(number2)
    number2 = number2 - 2
} while (number2 > 0)


let number3 = 101
console.log('\nBoucle For')
for (number3; number3 > 0; number3 -= 2) {
    console.log(number3)
}