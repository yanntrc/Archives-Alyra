const add = (Number1, Number2) => {
    return Number1 + Number2
}

const sub = (Number1, Number2) => {
    return Number1 - Number2
}

const mul = (Number1, Number2) => {
    return Number1 * Number2
}

const div = (Number1, Number2) => {
    return Number1 / Number2
}

const calc = (Number1, Number2, Operation) => {
    if (Operation === '+') {
        return add(Number1, Number2)
    }
    if (Operation === '-') {
        return sub(Number1, Number2)
    }
    if (Operation === '*') {
        return mul(Number1, Number2)
    }
    if (Operation === '/') {
        return div(Number1, Number2)
    }
}