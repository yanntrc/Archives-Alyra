import React from "react"
import { gradients } from "../gradients"
import { useState } from "react"
// JSON = "List des object"
// Json = [objet, objet, objet... ]

function Header() {
  const getRandomGradient = gradients => {
    const randomNum = Math.random() * gradients.length
    const randomIndex = Math.floor(randomNum)
    console.log("randomIndex", randomIndex)
    const randomGradient = gradients[randomIndex]
    console.log("randomGradient", randomGradient)
    return [randomGradient, randomIndex]
  }

  const [randomGradient, randomIndex] = getRandomGradient(gradients)

  const [currentIndex, setCurrentIndex] = useState(randomIndex)
  const [currentGradient, setCurrentGradient] = useState(randomGradient)

  const handleClickNext = () => {
    if (currentIndex >= 0 && currentIndex < gradients.length - 1) {
      const nextItem = gradients[currentIndex + 1]
      console.log("INCREASED!!!")
      console.log("nextIndex", currentIndex + 1)
      console.log("nextItemName", nextItem.name)

      setCurrentGradient(nextItem)
      setCurrentIndex(currentIndex + 1)
    } else if (currentIndex === gradients.length - 1) {
      const nextItem = gradients[0]
      const newIndex = 0
      setCurrentGradient(nextItem)
      setCurrentIndex(newIndex)
      console.log("nextIndex", newIndex)
      console.log("nextItemName", nextItem.name)
    }
  }

  const handleClickBack = () => {
    console.log("clicked back!!!")

    if (currentIndex > 0) {
      const prevItem = gradients[currentIndex - 1]
      console.log("DECREASED!!!")
      console.log("prevIndex", currentIndex - 1)
      console.log("nextItemName", prevItem.name)

      setCurrentGradient(prevItem)
      setCurrentIndex(currentIndex - 1)
    } else if (currentIndex === 0) {
      const prevItem = gradients[gradients.length - 1]
      const prevIndex = gradients.length - 1
      setCurrentGradient(prevItem)
      setCurrentIndex(prevIndex)
      console.log("nextIndex", prevIndex)
      console.log("nextItemName", prevItem.name)
    }
  }

  const handleClickRandom = () => {
    const [randomGr, randomInd] = getRandomGradient(gradients)

    setCurrentGradient(randomGr)
    setCurrentIndex(randomInd)
  }
  return (
    <header className="text-center bg-dark text-white py-5 mb-5" style={{ background: `linear-gradient(to bottom,  ${currentGradient.start} 0%,${currentGradient.end} 100%)` }}>
      <h1 className="display-1">Alyra Gradients</h1>
      <p className="tagline">Ultime collection de plus beaux dégradés</p>

      <button aria-label="Clicker pour afficher le dégradé précédant" type="button" className="btn btn-outline-light m-1" onClick={handleClickBack}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></path>
        </svg>
      </button>

      <button aria-label="Clicker pour changer le dégradé" type="button" className="btn btn-outline-light m-1" onClick={handleClickRandom}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"></path>
          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"></path>
        </svg>
      </button>
      <button aria-label="Clicker pour afficher le dégradé suivant" type="button" className="btn btn-outline-light m-1" onClick={handleClickNext}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
        </svg>
      </button>
    </header>
  )
}

export default Header
