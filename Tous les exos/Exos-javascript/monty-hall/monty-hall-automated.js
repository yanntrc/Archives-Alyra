const { randomInt } = require("crypto");
const readlineSync = require("readline-sync");

const choices = ["Ne pas changer de porte", "Changer de porte"];
let testingMode = readlineSync.keyInSelect(choices);
if (testingMode === -1) {
  process.exit();
}
let nbIterations = Number(
  readlineSync.question("Combien d'iterations souhaitez vous?")
);
let gameOn = true;
do {
  if (testingMode === 0) {
    let gamesPlayed = 0;
    let victoires = 0;
    let defaites = 0;
    do {
      let randomCarIndex = randomInt(0, 3); //Index de la voiture
      let userChoice = randomInt(0, 3);

      //Création du choix alternatif
      const notToDiscardIndexes = [];
      notToDiscardIndexes.push(randomCarIndex);
      notToDiscardIndexes.push(userChoice);
      const notToDiscardIndexesWithoutRepeats = [
        ...new Set(notToDiscardIndexes),
      ];
      const notToDiscardIndexesWithoutRepeatsSorted = notToDiscardIndexesWithoutRepeats.sort(
        (a, b) => a - b
      );

      let gateToDiscard = undefined;
      let altGateToDisplay = undefined;

      if (notToDiscardIndexesWithoutRepeatsSorted.length === 2) {
        for (let i = 0; i < 3; i++) {
          if (i !== randomCarIndex && i !== userChoice) {
            gateToDiscard = i;
            altGateToDisplay = randomCarIndex;
          }
        }
      } else {
        for (let i = 0; i < 3; i++) {
          if (i !== userChoice) {
            altGateToDisplay = i;
            break;
          }
        }
        for (let i = 0; i < 3; i++) {
          if (userChoice !== i && altGateToDisplay !== i) {
            gateToDiscard = i;
            break;
          }
        }
      }

      //L'utilisateur change de choix
      let finalUserChoice = userChoice;

      //Victoire ou Défaite
      if (finalUserChoice === randomCarIndex) {
        victoires++;
      } else {
        defaites++;
      }

      gamesPlayed++;
    } while (gamesPlayed < nbIterations);
    console.log("---------------");
    console.log(`Parties jouées: ${gamesPlayed}`);
    console.log(`Victoire: ${victoires}`);
    console.log(`Defaites: ${defaites}`);
    console.log("---------------");
    gameOn = readlineSync.keyInYN("Voulez vous faire un autre essai? ");
    if (gameOn) {
      testingMode = readlineSync.keyInSelect(choices);
      if (testingMode === -1) {
        process.exit();
      }
      nbIterations = Number(
        readlineSync.question("Combien d'iterations souhaitez vous? ")
      );
    } else {
      process.exit();
    }
  } else if (testingMode === 1) {
    let gamesPlayed = 0;
    let victoires = 0;
    let defaites = 0;

    do {
      let randomCarIndex = randomInt(0, 3); //Index de la voiture
      let userChoice = randomInt(0, 3);

      //Création du choix alternatif
      const notToDiscardIndexes = [];
      notToDiscardIndexes.push(randomCarIndex);
      notToDiscardIndexes.push(userChoice);
      const notToDiscardIndexesWithoutRepeats = [
        ...new Set(notToDiscardIndexes),
      ];
      const notToDiscardIndexesWithoutRepeatsSorted = notToDiscardIndexesWithoutRepeats.sort(
        (a, b) => a - b
      );

      let gateToDiscard = undefined;
      let altGateToDisplay = undefined;

      if (notToDiscardIndexesWithoutRepeatsSorted.length === 2) {
        for (let i = 0; i < 3; i++) {
          if (i !== randomCarIndex && i !== userChoice) {
            gateToDiscard = i;
            altGateToDisplay = randomCarIndex;
          }
        }
      } else {
        for (let i = 0; i < 3; i++) {
          if (i !== userChoice) {
            altGateToDisplay = i;
            break;
          }
        }
        for (let i = 0; i < 3; i++) {
          if (userChoice !== i && altGateToDisplay !== i) {
            gateToDiscard = i;
            break;
          }
        }
      }

      //L'utilisateur change de choix
      let finalUserChoice = altGateToDisplay;

      //Victoire ou Défaite
      if (finalUserChoice === randomCarIndex) {
        victoires++;
      } else {
        defaites++;
      }

      gamesPlayed++;
    } while (gamesPlayed < nbIterations);
    console.log("---------------");
    console.log(`Parties jouées: ${gamesPlayed}`);
    console.log(`Victoire: ${victoires}`);
    console.log(`Defaites: ${defaites}`);
    console.log("---------------");
    gameOn = readlineSync.keyInYN("Voulez vous faire un autre essai? ");
    if (gameOn) {
      testingMode = readlineSync.keyInSelect(choices);
      if (testingMode === -1) {
        process.exit();
      }
      nbIterations = Number(
        readlineSync.question("Combien d'iterations souhaitez vous? ")
      );
    } else {
      process.exit();
    }
  } else {
    console.log("Fin du programme.");
    process.exit();
  }
} while (gameOn);
