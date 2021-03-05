const biggest = (array) => {
    return Math.max(...array)
}

const sortAscend = (array) => {
    array.sort((a, b) => a - b)
    return array
}

const makeUnique = (array) => {
    return sortAscend([...new Set(array)])
}
console.log(makeUnique([1, 4, 2, 2, 2]))