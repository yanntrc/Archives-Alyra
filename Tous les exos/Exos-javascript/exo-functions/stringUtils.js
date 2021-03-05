const reverseStr = (string) => {
    let result = string.split('').reverse().join('')
    return result
}

const isPalindrome = (string) => {
    let result
    if (reverseStr(string) === string) {
        result = true
    } else {
        result = false
    }
    return result
}