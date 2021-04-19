const axios = require("axios")
const { randomInt } = require("crypto")

//Creation d'une fonction qui envoie une requete unique au serveur, avec des valeurs et operateur aléatoires. Elle return un objet
const testRequest = async () => {
  //Generation valeurs aléatoires
  const randomIndex = randomInt(0, 5)
  const value1 = randomInt(1001)
  const value2 = randomInt(1001)
  const operator = ["add", "sub", "mul", "div", "mod"]
  const randomOperator = operator[randomIndex]

  //Envoie de la requete avec axios
  const response = await axios.get(
    `http://localhost:3333/calc/${randomOperator}/${value1}/${value2}`
  )
  //Variables résultat et objet avec toutes les valeurs
  let finalResult = response.data
  let finalResultObj = { value1, value2, randomOperator, finalResult }

  //Return de l'objet avec toutes les valeurs
  return finalResultObj
}

//Export de la fonction de test "request", avec comme parametre le nombre de fois qu'on va tester le serveur
exports.request = async (nbrIterations) => {
  for (let i = 0; i < nbrIterations; i++) {
    console.log(await testRequest())
  }
}
