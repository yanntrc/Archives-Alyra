const square = [
    [20, 12, 4, 45, 37, 29, 28],
    [11, 3, 44, 36, 35, 27, 19],
    [2, 43, 42, 34, 26, 18, 10],
    [49, 41, 33, 25, 17, 9, 1],
    [40, 32, 24, 16, 8, 7, 48],
    [31, 23, 15, 14, 6, 47, 39],
    [22, 21, 13, 5, 46, 38, 30]
]

const sumsArray = (array) => {
    let sumsArray = []
    let diag1 = 0
    for (i = 0; i < array.length; i++) {
        diag1 += array[i][i]
    }
    sumsArray.push(diag1)

    let diag2 = 0
    for (i = 0; i < array.length; i++) {
        diag2 += array[i][array.length - 1]
    }
    sumsArray.push(diag2)

    for (i = 0; i < array.length; i++) {
        let lignes = 0
        for (j = 0; j < array[i].length; j++) {
            lignes += array[i][j]
        }
        sumsArray.push(lignes)
    }
    for (i = 0; i < array.length; i++) {
        let colonnes = 0
        for (j = 0; j < array[i].length; j++) {
            colonnes += array[j][i]
        }
        sumsArray.push(colonnes)
    }
    return sumsArray
}

const isMagicSquare = (square) => {
    let lengthArray = [...new Set(sumsArray(square))]
    if (lengthArray.length === 1) {
        return true
    } else {
        return false
    }
}

isMagicSquare(square)