let terminalInput = process.argv

let phraseAAnalyser = terminalInput[2]
let motRecherche = terminalInput[3]

let myReg = new RegExp(motRecherche, "g")
let match = phraseAAnalyser.match(myReg)

let counter = match.length

console.log(`le mot "${motRecherche}" apparait ${counter} fois dans le texte`)