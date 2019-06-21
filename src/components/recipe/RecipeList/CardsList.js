import React from 'react'
import RecipeCard from './RecipeCard';

const CardsList = ({ recipes, selectRecipe, selectedRecipe }) => {
  return recipes.map(recipe => {
    const {
      id, image, title, glutenFree, lowFodmap,
      vegetarian, vegan, dairyFree, readyInMinutes
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
        selectRecipe={selectRecipe}
      />
    )
  })
}

export default CardsList
