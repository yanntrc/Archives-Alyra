const numberPyramid = (baseNb) => {
    let tmp = 1
    for (tmp; tmp <= baseNb; tmp++) {
        let blockToString = tmp.toString()
        console.log(blockToString.repeat(tmp))
    }
}

numberPyramid(8)