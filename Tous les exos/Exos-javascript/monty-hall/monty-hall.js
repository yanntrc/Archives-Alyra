const { randomInt } = require('crypto')
const { exit } = require('process')
const readlineSync = require('readline-sync')


let gamesPlayed = 0
let exitGame = undefined

do {
console.log('Vous avez le choix entre trois portes. Une porte cache une voiture, les deux autres cachent une chèvre. Faites votre choix.')
let randomCarIndex = randomInt(0, 3)  //Index de la voiture
const possibleChoices = ['Porte 1','Porte 2','Porte 3']
let userChoice = readlineSync.keyInSelect(possibleChoices,) // Choix de l'utilisateur ( index )

if(userChoice === -1){
  process.exit()
}
//Création du choix alternatif
const notToDiscardIndexes = []
notToDiscardIndexes.push(randomCarIndex)
notToDiscardIndexes.push(userChoice)
const notToDiscardIndexesWithoutRepeats = [... new Set (notToDiscardIndexes)]
const notToDiscardIndexesWithoutRepeatsSorted = notToDiscardIndexesWithoutRepeats.sort((a, b) => a - b)


let gateToDiscard = undefined
let altGateToDisplay = undefined

if (notToDiscardIndexesWithoutRepeatsSorted.length === 2){
    for (let i = 0; i < 3; i++){
      if(i !== randomCarIndex && i !== userChoice){
        gateToDiscard = i
        altGateToDisplay = randomCarIndex
      }
    }
} else {
   for (let i = 0; i < 3; i++){
      if(i !== userChoice){
        altGateToDisplay = i
        break    
      }
    }
   for (let i = 0; i < 3; i++){
      if(userChoice !== i && altGateToDisplay !== i){
        gateToDiscard = i
        break
         }
}
}

//Possibilité pour l'utilisateur de changer de porte
console.log('---------------')
console.log(`Nous avons supprimé la porte ${possibleChoices[gateToDiscard]}. Vous pouvez changer avec la porte ${possibleChoices[altGateToDisplay]}`)
const finalChoice = readlineSync.keyInYN('Voulez vous changer de porte?')

let finalUserChoice = userChoice

if (finalChoice){
  finalUserChoice = altGateToDisplay
} 

//Victoire ou Défaite
if(finalUserChoice === randomCarIndex){
  console.log('---------------')
  console.log('Vous avez gagné une voiture!')
  const playAgain = ['Continuer de jouer']
    exitGame = readlineSync.keyInSelect(playAgain,)
  if(exitGame === -1){
    process.exit()
  }
} else {
  console.log('---------------')
  console.log('Vous avez perdu...')
  const playAgain = ['Continuer de jouer']
     exitGame = readlineSync.keyInSelect(playAgain,)
  if(exitGame === -1){
    process.exit()
  }
}
gamesPlayed++
} while (true)