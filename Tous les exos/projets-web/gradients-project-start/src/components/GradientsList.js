import Gradient from "./Gradient"
const GradientsList = ({ gradients, selectedTag, setSelectedTag, handleClickTagBtn }) => {
  return (
    <ul className="row list-unstyled">
      {gradients.map(gradient => {
        const TagsArray = gradient.tags

        if (selectedTag) {
          if (TagsArray.includes(selectedTag)) {
            console.log("TaggsArray", TagsArray)

            return <Gradient colorStart={gradient.start} colorEnd={gradient.end} name={gradient.name} selectedTag={selectedTag} TagsArray={TagsArray} handleClickTagBtn={handleClickTagBtn} />
          }
          return null
        }
        return <Gradient colorStart={gradient.start} colorEnd={gradient.end} name={gradient.name} selectedTag={selectedTag} TagsArray={TagsArray} handleClickTagBtn={handleClickTagBtn} />
      })}
    </ul>
  )
}

export default GradientsList
