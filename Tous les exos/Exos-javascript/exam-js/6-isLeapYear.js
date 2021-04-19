const isLeapyear = (year) => {
    if (year % 4 === 0 && year % 100 !== 0) {
        return true
    } else if (year % 400 === 0) {
        return true
    } else {
        return false
    }
}

console.log(isLeapyear(2021))