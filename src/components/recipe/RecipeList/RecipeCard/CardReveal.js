import React from 'react'
import  AllergensInfo from '../../RecipeDetail/AllergensInfo'
import { Link } from 'react-router-dom'
import PrepTime from '../../RecipeDetail/PrepTime.js'

const CardReveal = props => {
  const {
    isGlutenFree, isDairyFree, isVegetarian,
    isLowFodmap, isVegan, readyInMinutes,
    title, id, cookingMinutes
  } = props
  return (
    <div className="card-reveal">
      <i className="card-title grey-text text-darken-4 material-icons right">close</i>
      <span className="card-title grey-text text-darken-4">
        {title}
      </span>
      <PrepTime
        cookingMinutes={cookingMinutes}
        readyInMinutes={readyInMinutes}
      />
      <AllergensInfo
        isGlutenFree={isGlutenFree}
        isDairyFree={isDairyFree}
        isVegetarian={isVegetarian}
        isLowFodmap={isLowFodmap}
        isVegan={isVegan}
      />
      <Link to={`/recipes/${id}`}>See the full recipe</Link>
    </div>
  )
}
export default CardReveal
