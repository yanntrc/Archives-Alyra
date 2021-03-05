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