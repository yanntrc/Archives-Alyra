const pyramid = (baseBlockAmount, blockType, fromGroundUp) => {
    if (fromGroundUp === true) {
        let tmp = 1
        for (baseBlockAmount; baseBlockAmount > 0; baseBlockAmount--) {
            console.log(blockType.repeat([tmp]))
            tmp++
        }
    }
    if (fromGroundUp === false) {
        for (baseBlockAmount; baseBlockAmount > 0; baseBlockAmount--) {
            console.log(blockType.repeat([baseBlockAmount]))
        }
    }
}
let groundUp = true

if (process.argv.length !== 4 && process.argv.length !== 5) {
    console.log('enter baseNbValue and Symbol only')
    process.exit(1)
}

if (isNaN(process.argv[2])) {
    console.log(`Error: ${process.argv[2]} is not a number.`)
    process.exit(1)
}

if (process.argv[4] === '-r') {
    groundUp = false
}

let baseNb = Number(process.argv[2])
let symbol = process.argv[3]

pyramid(baseNb, symbol, groundUp)