import React from "react"

const GradientTags = ({ selectedTag, TagsArray, handleClickTagBtn }) => {
  const tagButtons = TagsArray.map(tag => {
    const isDisabled = tag === selectedTag
    return (
      <button type="button" className={`btn btn-sm me-2 mb-2 ${isDisabled ? "bg-light" : "bg-dark text-white"}`} onClick={() => handleClickTagBtn(tag)} disabled={isDisabled}>
        {tag}
      </button>
    )
  })

  return (
    <div class="mt-3">
      {tagButtons}

      {/* <button type="button" class="btn btn-sm me-2 mb-2 bg-dark text-white">
        bleu
      </button>
      <button type="button" class="btn btn-sm me-2 mb-2 bg-dark text-white">
        violet
      </button> */}
    </div>
  )
}

export default GradientTags
