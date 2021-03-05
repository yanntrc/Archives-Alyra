//Valeurs de départ à renseigner
let BitcoinCurrentValue = 47000 // In Dollars
var CurrentAmountToInvest = 10000 //In Dollars
const Margin = 100 // Marge au dela de laquelle on commence à acheter/vendre.

//Exemple : Bitcoin Current Value = 47000, valeur moyenne d'acquisition sur les transactions perso effectuées = 46000.
//Si la marge est de 100, il faudra attendre que le bitcoin passe en dessous 45900$ pour acheter, ou au dessus de 46100 pour vendre. Marge de 100$ de benefice par Bitcoin.


//Valeurs de calcul

var AmountOfBitcoinBoughtOnPreviousOperations = undefined
var AmountOfBitcoinSoldOnPreviousOperations = undefined

var AmountOfBitcoinBoughtOnThisOperation = 0
var AmountOfBitcoinSoldOnThisOperation = 0

let AcquisitionValueForThisOperation = AmountOfBitcoinBoughtOnThisOperation * BitcoinCurrentValue
let SaleValueForThisOperation = AmountOfBitcoinSoldOnThisOperation * BitcoinCurrentValue


let TotalAmountOfBitcoinBought = AmountOfBitcoinBoughtOnPreviousOperations + AmountOfBitcoinBoughtOnThisOperation
let TotalAmountOfBitcoinSold = AmountOfBitcoinSoldOnPreviousOperations + AmountOfBitcoinSoldOnThisOperation
let CurrentAmountOfBitcoinInTheWallet = TotalAmountOfBitcoinBought - TotalAmountOfBitcoinSold

let PreviousTotalAcquisitionValue = undefined
let PreviousTotalSaleValue = undefined

let TotalAcquisitionValue = PreviousTotalAcquisitionValue + AcquisitionValueForThisOperation
let TotalSaleValue = +PreviousTotalSaleValue + SaleValueForThisOperation

let TotalBalance = TotalAcquisitionValue - TotalSaleValue

var AverageAcquisitionCost = TotalBalance / CurrentAmountOfBitcoinInTheWallet //Cout moyen d'acquisition du Bitcoin pour ce portefeuille (en dollars).

let Gap = BitcoinCurrentValue - AverageAcquisitionCost // Valeur à comparer avec la constante margin pour decider de vendre ou acheter
let GapAbsoluteValue = Math.abs(Gap) //Valeur absolue de Gap. A afficher quand Gap est négatif.


//Premier affichage : valeurs avant prise de décision.
console.log(`Le cours du Bitcoin est actuellement de : ${BitcoinCurrentValue} BTC.`)
console.log(`Vous avez actuellement : ${CurrentAmountToInvest}$ et ${CurrentAmountOfBitcoinInTheWallet} BTC dans votre portefeuille.`)

if (TotalAmountOfBitcoinBought = 0 || Gap > 0) {
    console.log(`Le cours du Bitcoin est de ${Gap}$ superieure à la valeur moyenne composée du bitcoin dans votre portefeuille.`)
} else if (Gap < 0) {
    console.log(`La valeur moyenne du Bitcoin de votre portefeuille est actuellement de ${GapAbsoluteValue}$ supérieure au cours du Bitcoin.`)
} else {
    console.log("La valeur moyenne d'acquisition du Bitcoin de votre portefeuille est actuellement la meme que le cours du Bitcoin.")
}
console.log(`-- -- -- -- - `)



//if else pour voir si il y a lieu d'acheter ou de vendre.
if (CurrentAmountToInvest === 0) {
    var BuyBitcoin = true
} else if ((Gap - Margin) > 0 && CurrentAmountToInvest > 0) { //On n'achete que si le Bitcoin est superieur de ${Margin} au cout moyen d'acquisition. C'est ce que permet de verifier Gap - Margin > 0.
    var BuyBitcoin = true
} else if (GapAbsoluteValue - Margin > 0 && CurrentAmountOfBitcoinInTheWallet > 0) { //On ne vend que si le Bitcoin est inferieur de ${Margin} au cout moyen d'acquisition. Puisque Gap < 0, on utilise ${GabAbsoluteValue}
    var SellBitcoin = true
}


//if else pour decider de la quantité à acheter ou vendre.
if (BuyBitcoin) {
    var NumberOFBitcoinBoughtOnThisOperation = (0.0001 * NumberOFBitcoinBoughtOnThisOperation) + NumberOFBitcoinBoughtOnThisOperation
    var CurrentAmountToInvest = CurrentAmountToInvest - AcquisitionValueForThisOperation
    console.log(`Vous venez d'acheter 1/10000 BTC pour une valeur totale de ${AcquisitionValueForThisOperation}$`)
} else if (SellBitcoin) {
    var NumberOfBitcoinSoldOnThisOperation = (0.0001 * NumberOfBitcoinSoldOnThisOperation) + NumberOfBitcoinSoldOnThisOperation
    var CurrentAmountToInvest = CurrentAmountToInvest - AcquisitionValueForThisOperation
    console.log(`Vous venez de vendre 1/10000 BTC pour une valeur totale de ${SaleValueForThisOperation}$`)
} else {
    console.log("Il n'est pas interessant d'acheter ou de vendre pour le moment")
}



//Affichage des valeurs après la prise de décision
console.log(`-- -- -- -- - `)


if (TotalAmountOfBitcoinBought > 0) {
    console.log(`Vous avez acheté un total de : ${TotalAmountOfBitcoinBought} BTC pour une valeur totale de : ${TotalAcquisitionValue}$`)
    console.log(`Vous avez vendu un total de : ${TotalAmountOfBitcoinSold} BTC pour une valeur totale de : ${TotalSaleValue}$`)
    console.log(`La valeur moyenne du Bitcoin pour votre portefeuille est de : ${AverageAcquisitionCost}$`)
    console.log(`Vous avez un total de : ${CurrentAmountOfBitcoinInTheWallet} BTC`)
} else if (TotalAmountOfBitcoinBought === 0) {
    console.log("Vous n'avez pas assez d'argent pour investir")
}