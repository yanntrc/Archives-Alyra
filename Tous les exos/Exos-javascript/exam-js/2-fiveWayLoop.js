const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

console.log('---for---')
for (i = 0; i < tab.length; i++) {
    console.log(`${tab[i]}, length: ${tab[i].length}`)
}

console.log('---for of---')
for (const elem of tab) {
    console.log(`${elem}, length: ${elem.length}`)

}

console.log('---for each---')
tab.forEach(x => console.log(`${x}, length: ${x.length}`))

console.log('---while---')
let tmp1 = 0
while (tmp1 < tab.length) {
    console.log(`${tab[tmp1]}, length: ${tab[tmp1].length}`)
    tmp1++
}

console.log('---do while---')
let tmp2 = 0
do {
    console.log(`${tab[tmp2]}, length: ${tab[tmp2].length}`)
    tmp2++
}
while (tmp2 < tab.length)