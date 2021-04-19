import React from "react"
import { useState } from "react"
import GradientsSelect from "./GradientsSelect"
import GradientsList from "./GradientsList"
import { gradients, uniqueTags } from "../gradients"

const GradientsApp = () => {
  const handleSelectDropdown = e => {
    setSelectedTag(e.target.value)
  }

  const handleClickTagBtn = tagName => {
    setSelectedTag(tagName)
  }

  const [selectedTag, setSelectedTag] = useState("")

  console.log("selectedTag", selectedTag)

  return (
    <>
      <GradientsSelect uniqueTags={uniqueTags} selectedTag={selectedTag} handleSelectDropdown={handleSelectDropdown} />
      <GradientsList gradients={gradients} selectedTag={selectedTag} handleClickTagBtn={handleClickTagBtn} />
    </>
  )
}

export default GradientsApp
