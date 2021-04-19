//Require d'express
const express = require("express")
const app = express()
const client = require("./client")
const readlineSync = require("readline-sync")

//Port d'écoute du Serveur
const PORT = 3333

//Message d'acceuil
app.get("/calc/", (req, res) => {
  res.send(
    "Bienvenue. Pour faire un calcul, utilisez le format /calc/op/value1/value2. Les operateurs disponibles sont add, sub, mul, div et mod(modulo). Seules les valeures numeriques sont acceptées. "
  )
})

app.get("/calc/:op/:value1/:value2", (req, res) => {
  //Recuperation des valeurs et de l'operateur
  const operator = req.params.op
  const value1 = Number(req.params.value1)
  const value2 = Number(req.params.value2)

  //déclaration de la variable résultat; à définir plus tard
  let result = undefined

  //Verification value valeure numerique
  if (isNaN(value1) || isNaN(value2)) {
    res.status(400).send("Please enter numbers as values.")
    result = undefined
  }

  //Switch en fonction de l'opérateur choisi. Defaut en cas d'opérateur invalide
  switch (operator) {
    case "add":
      result = value1 + value2
      break
    case "sub":
      result = value1 - value2
      break
    case "div":
      result = value1 / value2
      break
    case "mul":
      result = value1 * value2
      break
    case "mod":
      result = value1 % value2
      break
    default:
      res
        .status(400)
        .send(
          "Veuillez entrer une opération selon de format: /calc/op/value1/value2. Les opérateurs acceptés sont: add, sub, div, mul et mod (modulo). "
        )
      break
  }

  //Envoi du résultat
  res.send(JSON.stringify(result))
})

//Connexion au port d'écoute
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})

//Appel de la fonction request de client.js, permet de tester le fonctionnement du serveur.
const nmbriterations = Number(
  readlineSync.question("Combien d'itérations voulez vous tester?")
)
if (!isNaN(nmbriterations)) {
  client.request(nmbriterations)
} else {
  console.log("Entrez un nombre.")
}
