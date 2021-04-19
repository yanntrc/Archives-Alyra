let terminalInput = process.argv //Mise en memoire de l'input terminal.
let cypher = terminalInput[2] //Recuperation du bon index de l'emplacement.
let originalCypher = cypher //string de départ.


//dataset
let removeSpecialChar = originalCypher.replace(/[^a-zA-Z ]/g, "") //Enlever eventuels caractères speciaux
let cypherToUpperCase = removeSpecialChar.toUpperCase() // Tout passer en Majuscules

let wordsBreakdown = cypherToUpperCase.split(" ") //Array des mots présents dans la string.
let cypherWithoutSpaces = cypherToUpperCase.replace(/ /g, "") // String sans les espaces.
let cypherArray = Array.from(cypherWithoutSpaces) //Array sans les espaces.
let cypherArrayAndSpaces = Array.from(cypherToUpperCase) //Array lettres et espaces. 


var oneLetterWords = []
for (let i = 0; i < wordsBreakdown.length; i++) {
    let temp = wordsBreakdown[i]
    if (temp.length < 2) {
        oneLetterWords.push(wordsBreakdown[i].charAt(0))
    }
}

let firstLetters = [] //Premieres lettres de chaques mots.
for (let i = 0; i < wordsBreakdown.length; i++) {
    firstLetters.push(wordsBreakdown[i].charAt(0))
}

let lastLetters = [] //Dernieres lettres de chaques mots.
for (let i = 0; i < wordsBreakdown.length; i++) {
    lastLetters.push(wordsBreakdown[i].charAt(wordsBreakdown[i].length - 1))
}


//dataset to numbers
//Functions
function asciiToLetters(asciiNumber) { //Function Ascii To Letters.
    return String.fromCharCode(asciiNumber)
}

function lettersToAscii(letter, index) { //Function letter to ascii.
    return letter.charCodeAt(index)
}

function preliminaryShiftAscii(asciiNumber, expectedNumber) { //Fonction qui compare deux valeurs ascii et trouve un shift.
    if (asciiNumber > expectedNumber) {
        var estimatedShift = (90 - asciiNumber) + (expectedNumber - 64)
    } else if (asciiNumber < expectedNumber) {
        var estimatedShift = expectedNumber - asciiNumber
    } else {
        var estimatedShift = 0
    }

    return estimatedShift
}

function finalShiftAscii(asciiNumber, estimatedShift) { //Function qui permet d'effectuer un shift sur une valeur ascii. 
    if (asciiNumber >= 65) {
        let nToBase = (asciiNumber - 65)
        let baseDecallee = ((nToBase + estimatedShift) % 26)
        return baseDecallee + 65
    } else if (asciiNumber === 32) {
        return 32
    }
}
//Data vers Ascii
let asciiLettersAndSpaces = [] //Toutes les lettres en ascii avec espaces.
for (let i = 0; i < cypherArrayAndSpaces.length; i++) {
    asciiLettersAndSpaces.push(lettersToAscii(cypherArrayAndSpaces[i]))
}

let asciiAllLetters = [] //Toutes les lettres en ascii.
for (let i = 0; i < cypherArray.length; i++) {
    asciiAllLetters.push(lettersToAscii(cypherArray[i]))
}

let asciiFirstLetters = [] //Toutes les premières lettres de chaque mot en ascii.
for (let i = 0; i < firstLetters.length; i++) {
    asciiFirstLetters.push(lettersToAscii(firstLetters[i]))
}

let asciiLastLetters = [] //Toutes les dernières lettres de chaque mots en ascii.
for (let i = 0; i < lastLetters.length; i++) {
    asciiLastLetters.push(lettersToAscii(lastLetters[i]))
}

let asciiOneLetterWords = [] //Toutes les mots d'une lettre en ascii.
for (let i = 0; i < oneLetterWords.length; i++) {
    asciiOneLetterWords.push(lettersToAscii(oneLetterWords[i]))
}

//Valeurs attendues un anglais
//Most frequent dataset
let mostFrequentLettersReference = ['E', 'T', 'A', 'I', 'O'] //Array 5 lettres les plus frequentes.
let mostFrequentFirstLettersReference = ['T', 'A', 'O', 'D', 'W'] //Array 5 premieres lettres les plus frequentes en debut de mot ( pour la premiere lettre).
let mostFrequentLastLettersReference = ['E', 'S', 'D', 'T'] //Array 4 dernières lettres les plus frequentes en fin de mot ( pour la dernière lettre).
let mostFrequentOneLetterWordsReference = ['A', 'I'] //Array 2 lettres les plus fréquentes pour les mots à une lettre. Inutile Pour le Moment


//Most frequent dataset to ascii
let asciiMFLR = [] //5 lettres les plus frequentes converties en ascii.
for (let i = 0; i < mostFrequentLettersReference.length; i++) {
    asciiMFLR.push(lettersToAscii(mostFrequentLettersReference[i]))
}

let asciiMFFLR = [] //5 premieres lettres les plus frequentes converties en ascii.
for (let i = 0; i < mostFrequentFirstLettersReference.length; i++) {
    asciiMFFLR.push(lettersToAscii(mostFrequentFirstLettersReference[i]))
}

let asciiMFLLR = [] //4 dernières lettres les plus frequentes converties en ascii.
for (let i = 0; i < mostFrequentLastLettersReference.length; i++) {
    asciiMFLLR.push(lettersToAscii(mostFrequentLastLettersReference[i]))
}

let asciiMFOLWR = [] //2 lettres les plus fréquentes pour les mots à une lettre converties en ascii.
for (let i = 0; i < mostFrequentOneLetterWordsReference.length; i++) {
    asciiMFOLWR.push(lettersToAscii(mostFrequentOneLetterWordsReference[i]))
}


//Calcul du decalage à effectuer
//Fonction d'extraction de l'occurence la plus grande dans un array.
function extractMostFrequent(arrayToAnalyse) {
    var mf = 1;
    var m = 0;
    var mostFrequent = [];
    for (var i = 0; i < arrayToAnalyse.length; i++) {
        for (var j = i; j < arrayToAnalyse.length; j++) {
            if (arrayToAnalyse[i] == arrayToAnalyse[j])
                m++;
            if (mf < m) {
                mf = m;
                mostFrequent = arrayToAnalyse[i];
            }
        }
        m = 0;
    }
    return mostFrequent
}


//Calcul du shift par comparaison des valeurs
var mostFrequentLetterInAllLettersInCypher = extractMostFrequent(asciiAllLetters)
if (mostFrequentLetterInAllLettersInCypher.length === 0) {
    var mostFrequentLetterInAllLettersInCypher = asciiMFLR[0]
}

var mostFrequentLetterInFirstLettersInCypher = extractMostFrequent(asciiFirstLetters)
if (mostFrequentLetterInFirstLettersInCypher.length === 0) {
    var mostFrequentLetterInFirstLettersInCypher = asciiMFFLR[0]
}

var mostFrequentLetterInLastLettersInCypher = extractMostFrequent(asciiLastLetters)
if (mostFrequentLetterInLastLettersInCypher.length === 0) {
    var mostFrequentLetterInLastLettersInCypher = asciiMFLLR[0]
}

var mostFrequentLetterInOneLetterWordsInCypher = extractMostFrequent(asciiOneLetterWords)
if (mostFrequentLetterInOneLetterWordsInCypher.length === 0) {
    var mostFrequentLetterInOneLetterWordsInCypher = asciiMFOLWR[0]
}

let expectedShiftForMFLR = preliminaryShiftAscii(mostFrequentLetterInAllLettersInCypher, asciiMFLR[0])
let expectedShiftForMFFLR = preliminaryShiftAscii(mostFrequentLetterInFirstLettersInCypher, asciiMFFLR[0])
let expectedShiftForMFLLR = preliminaryShiftAscii(mostFrequentLetterInLastLettersInCypher, asciiMFLLR[0])
let expectedShiftForMFOLW = preliminaryShiftAscii(mostFrequentLetterInOneLetterWordsInCypher, asciiMFOLWR[0])

let secondExpectedShiftForMFLR = preliminaryShiftAscii(mostFrequentLetterInAllLettersInCypher, asciiMFLR[1])
let secondExpectedShiftForMFFLR = preliminaryShiftAscii(mostFrequentLetterInFirstLettersInCypher, asciiMFFLR[1])
let secondExpectedShiftForMFLLR = preliminaryShiftAscii(mostFrequentLetterInLastLettersInCypher, asciiMFLLR[1])
let secondExpectedShiftForMFOLW = preliminaryShiftAscii(mostFrequentLetterInOneLetterWordsInCypher, asciiMFOLWR[1])

let thirdExpectedShiftForMFLR = preliminaryShiftAscii(mostFrequentLetterInAllLettersInCypher, asciiMFLR[2])
let thirdExpectedShiftForMFFLR = preliminaryShiftAscii(mostFrequentLetterInFirstLettersInCypher, asciiMFFLR[2])
let thirdExpectedShiftForMFLLR = preliminaryShiftAscii(mostFrequentLetterInLastLettersInCypher, asciiMFLLR[2])



let shiftArray = [] //Array contenant les shifts attendus

shiftArray.push(expectedShiftForMFLR)
shiftArray.push(expectedShiftForMFFLR)
shiftArray.push(expectedShiftForMFLLR)
shiftArray.push(expectedShiftForMFOLW)
shiftArray.push(secondExpectedShiftForMFLR)
shiftArray.push(secondExpectedShiftForMFFLR)
shiftArray.push(secondExpectedShiftForMFLLR)
shiftArray.push(secondExpectedShiftForMFOLW)
shiftArray.push(thirdExpectedShiftForMFLR)
shiftArray.push(thirdExpectedShiftForMFFLR)
shiftArray.push(thirdExpectedShiftForMFLLR)


let allLettersToAsciiSorted = shiftArray.slice().sort(function(a, b) { return b - a }) //Permet de classer les chiffres dans le tableau

var finalShift = extractMostFrequent(shiftArray) //Extraction par la fonction des shifts les plus représentés, ce qui permet de déterminer le shift qu'on va appliquer.
if (finalShift.length === 0) {
    var finalShift = expectedShiftForMFLR
}

//Affichage pour comprendre le traitement de l'info
console.log(`---------------------------------------------------------------------`)
if (allLettersToAsciiSorted.length > 0) {
    console.log(`Tableau des shifts les plus probables :\n\
${allLettersToAsciiSorted}`)
} else {
    console.log(`Tableau des shifts les plus probables :\n\
Aucune probabilité détectée.\nDecallage vers lettre E par defaut.`)
}
console.log(`- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - `)
console.log(`final shift = ${finalShift}`)
console.log(`---------------------------------------------------------------------`)


//Shift to result.
let shiftedInNewAscii = [] //Letters to Ascii + Shift
for (let i = 0; i < asciiLettersAndSpaces.length; i++) {
    shiftedInNewAscii.push(finalShiftAscii(asciiLettersAndSpaces[i], finalShift))
}

let decypheredArray = []
for (let i = 0; i < shiftedInNewAscii.length; i++) {
    decypheredArray.push(asciiToLetters(shiftedInNewAscii[i]))
}

let decypheredBackToString = decypheredArray.join("")


//Determine si on affiche l'un ou l'autre message // 
if (0 < finalShift && finalShift < 14) {
    var messageFinal = `Le message chiffré a été décallé de ${finalShift} lettres vers la droite.` // variable finalShift valable pour decallage droite jusqu'au chiffre 13
} else if (14 <= finalShift && finalShift < 25) {
    var messageFinal = `Le message chiffré a été décallé de ${(-finalShift)+26} lettres vers la gauche.` //inversion de la variable finalShift pour prendre en compte decallage gauche.
} else {
    var messageFinal = 'Le message n\'as pas besoin d\'être décodé.'
}


//Affichage du résultat

console.log(`Message chiffré :\n ${originalCypher}`)
console.log(`---------------------------------------------------------------------`)
console.log(messageFinal)
console.log(`---------------------------------------------------------------------`)
console.log(`Message dechiffré :\n ${decypheredBackToString}`)
console.log(`---------------------------------------------------------------------`)