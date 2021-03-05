let tab = [
    [
        [1, 7, 3],
        [11, 17, 7],
        [-3, -5],
        [5, 13],
    ],
    [
        [2, 4, 6, 8, 10],
        [1, 3, 5],
    ],
    [
        [0]
    ],
    [
        [0],
        [1],
        [2],
        [1]
    ],
]

let result = 0

for (i = 0; i < tab.length; i++) {
    for (j = 0; j < tab[i].length; j++) {
        for (k = 0; k < tab[i][j].length; k++) {
            result = result + tab[i][j][k]
        }
    }
}

console.log(`La somme des éléments du tableau est de ${result}.`)