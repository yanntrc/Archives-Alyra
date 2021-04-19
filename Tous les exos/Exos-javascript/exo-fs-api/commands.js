const fs = require('fs')

//Fonction Echo
const echo = (input) => {
    const [, , ...args] = input
    args.forEach(elem => console.log(elem))
}
exports.echo = echo

//Fonction Cat
const cat = (path) => {
    return fs.readFileSync(path, 'utf-8')
}
exports.cat = cat


//Fonction Copy
const copy = (originFile, destination) => {
    let fileContent = cat(originFile)
    return fs.writeFileSync(destination, fileContent)
}
exports.copy = copy

//Fonction Append
const append = (originFile, destination) => {
    let fileContent = '\n'
    fileContent += cat(originFile)
    return fs.appendFileSync(destination, fileContent)
}
exports.append = append

//Fonction Tail
const tail = (originFile, lastLignesAmount) => {
    let fileCopy = cat(originFile)
    let fileToArray = fileCopy.split('\n')
    let tmplength = fileToArray.length
    if (lastLignesAmount > tmplength) {
        tmplength = lastLignesAmount
    }
    let lastLignesArray = fileToArray.slice(tmplength - lastLignesAmount, fileToArray.length)
    let finalString = lastLignesArray.toString().replaceAll(',', '\n')
    return finalString
}
exports.tail = tail

//Function Wc
const wc = (fileToAnalyse) => {
    let tmpFile1 = cat(fileToAnalyse)
    let tmpFile2 = cat(fileToAnalyse).replaceAll('\n', ' ')
    let tmpFile3 = cat(fileToAnalyse).replaceAll('\n', '')
    let charCount = tmpFile3.length
    let fileToArray = tmpFile1.split('\n')
    let lineCount = fileToArray.length
    let wordCount = tmpFile2.split(' ').length
    return [lineCount, wordCount, charCount, fileToAnalyse]
}
exports.wc = wc