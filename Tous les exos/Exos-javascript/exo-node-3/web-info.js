const axios = require("axios")
const fsPromises = require("fs/promises")
const jsdom = require("jsdom")
const { JSDOM } = jsdom
const readlineSync = require("readline-sync")

//Creation d'une fonction qui return certaines infos récupérées grace à axios, avec gestion des erreurs
const getHTML = async (url) => {
  try {
    const response = await axios.get(url)
    const dom = new JSDOM(response.data)
    const title = dom.window.document.querySelector("title").textContent
    const linksList = dom.window.document.querySelectorAll("a")
    const imageList = dom.window.document.querySelectorAll("img")
    const divList = dom.window.document.querySelectorAll("div")
    return {
      url,
      contentLength: response.headers["content-length"],
      title,
      nbUrls: linksList.length,
      nbImgs: imageList.length,
      nbDivs: divList.length,
    }
  } catch (e) {
    console.log(e.message)
  }
}

//fonction main asynchrone, qui prend en parametre un url et le nom du fichier json à créer
const main = async (url, fileName) => {
  let tmp = await getHTML(url)
  let jsonString = JSON.stringify(tmp)
  await fsPromises.writeFile(`${fileName}.json`, jsonString)
}

//Recupération de l'input utilisateur avc readlineSync
let url = readlineSync.question("Entrez l'url à récupérer: ")
let fileName = readlineSync.question("Entrez le nom du fichier JSON à créer: ")

main(url, fileName)
