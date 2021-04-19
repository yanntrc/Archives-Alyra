const numberTab = [1, 2, 4]

const average = (tab) => {
    let tabSum = 0
    for (const elem of tab) {
        tabSum += elem
    }
    return tabSum / tab.length
}

console.log(average(numberTab))