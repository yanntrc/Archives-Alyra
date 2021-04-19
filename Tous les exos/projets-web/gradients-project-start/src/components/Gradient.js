import GradientTitle from "./GradientTitle"
import GradientCode from "./GradientCode"
import GradientPill from "./GradientPill"
import GradientTags from "./GradientTags"

const Gradient = ({ colorStart, handleClickTagBtn, colorEnd, name, selectedTag, setSelectedTag, TagsArray }) => {
  return (
    <li className="col-lg-3 col-md-4 col-sm-6">
      <div className="card p-3 mb-4 shadow">
        <GradientPill colorStart={colorStart} colorEnd={colorEnd} />
        <GradientTitle>{name}</GradientTitle>
        <GradientCode colorStart={colorStart} colorEnd={colorEnd} />
        <GradientTags selectedTag={selectedTag} TagsArray={TagsArray} handleClickTagBtn={handleClickTagBtn} />
      </div>
    </li>
  )
}

export default Gradient
