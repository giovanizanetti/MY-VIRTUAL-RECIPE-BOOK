import React from 'react'
import RecipeCard from './RecipeCard/'

const CardsList = ({ recipes }) => {
  return recipes && recipes.sort(function(a, b) {
    const textA = a.title.toUpperCase()
    const textB = b.title.toUpperCase()
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
  }).map((recipe, i) => {
    const {
      id, image, title, glutenFree, lowFodmap,
      vegetarian, vegan, dairyFree, readyInMinutes,
      cookingMinutes
    } = recipe
    return (
      <RecipeCard
        key={i}
        recipes={recipes}
        id={id}
        image={image}
        title={title}
        glutenFree={glutenFree}
        lowFodmap={lowFodmap}
        vegetarian={vegetarian}
        vegan={vegan}
        dairyFree={dairyFree}
        readyInMinutes={readyInMinutes}
        cookingMinutes={cookingMinutes}
      />
    )
  })
}

export default CardsList
