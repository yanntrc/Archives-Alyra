let tab = [
    [1, 2, 3],
    [4, -5, 7],
    [-3, -6],
    [10, -13],
]

let result = 0
for (i = 0; i < tab.length; i++) {
    for (j = 0; j < tab[i].length; j++) {
        result += tab[i][j]
    }
}

console.log(`La somme des éléments du tableau est de ${result}.`)