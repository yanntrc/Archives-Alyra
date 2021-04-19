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