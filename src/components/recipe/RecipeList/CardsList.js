import React from 'react'
import RecipeCard from './RecipeCard/'

const CardsList = ({ recipes, selectRecipe }) => {
  return recipes.map(recipe => {
    const {
      id, image, title, glutenFree, lowFodmap,
      vegetarian, vegan, dairyFree, readyInMinutes,
      cookingMinutes
    } = recipe
    return(
      <RecipeCard
        key={id}
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
        selectRecipe={selectRecipe}
      />
    )
  })
}

export default CardsList
