const fs = require('fs')
const chalk = require('chalk')
const readlineSync = require('readline-sync')
const {randomInt} = require('crypto')
const {wordsArray} = require('./Data/Words.js')
const {hangman} = require('./Data/Hangman.js')
const {highScore}= require('./Data/Highscore.js')

let randomIndex = randomInt(0,wordsArray.length)

class Game {
  constructor(wordsArray, playerName, highScore){
    this.word = wordsArray[randomIndex]
    this.player = playerName
    this.highScore = highScore
  }
 run(){
   let letterCount = this.word.length
   let userWrongGuessCount = 0
   let maxAttempts = 9
   let wordToArray = this.word.split('')
   let guessedLettersindex = []
   while(userWrongGuessCount < maxAttempts){
   let userGuess = readlineSync.question('Choississez une lettre: ')
   let userGuessToLowerCase = userGuess.toLowerCase()
   let tmpGuessCounterOrigin = 0
   let tmpGuessCounterNew = 0
   for (let i=0; i<this.word.length; i++){
      if(userGuessToLowerCase===wordToArray[i]){
        guessedLettersindex.push(i)
        tmpGuessCounterNew++
      }
   }
   let guessedLettersindexSorted = guessedLettersindex.sort((a, b) => a - b)
   let guessedLettersindexSortedUnique = [...new Set(guessedLettersindexSorted)]
   let userDisplay =[]
   let tmpSortedindex = 0
   for (let i=0; i<this.word.length; i++){
      if (guessedLettersindexSortedUnique[tmpSortedindex]===i){
        userDisplay.push(this.word[i])
        tmpSortedindex++
      } else{
        userDisplay.push('-')
      }
   }
   let userDisplayToString = userDisplay.join(' ')
   console.log(userDisplayToString)
   if (guessedLettersindexSortedUnique.length === this.word.length){
     console.log('Vous avez gagné.')
     process.exit()
   }
   if(tmpGuessCounterOrigin===tmpGuessCounterNew){
     userWrongGuessCount++
   }else{
     tmpGuessCounterOrigin=tmpGuessCounterNew
   }
   console.log(`${9-userWrongGuessCount} réponses restantes.`)
   }
   console.log('Vous avez perdu.')
   process.exit()
 }
}

let playerName = readlineSync.question('Veuillez entrer votre nom: ')
let game = new Game (wordsArray, playerName, highScore)
game.run()