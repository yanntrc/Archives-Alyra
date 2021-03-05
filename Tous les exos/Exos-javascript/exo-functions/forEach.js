const add = (number) => {
    return number + 2
}
const foreach = (func, array) => {
    let Tab = []
    for (let i = 0; i < array.length; i++) {
        Tab.push(func(array[i]))
    }
    return Tab
}