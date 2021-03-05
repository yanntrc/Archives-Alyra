const fltr = (func, array) => {
    let Tab = []
    for (let i = 0; i < array.length; i++) {
        if (func(array[i])) {
            let tmp = array[i]
            Tab.push(tmp)
        }
    }
    return Tab
}