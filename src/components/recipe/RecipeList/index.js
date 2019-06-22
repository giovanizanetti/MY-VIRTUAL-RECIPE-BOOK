import React from 'react'
import CardsList from './CardsList.js'

const RecipeList = (props) => {
  const { recipes, selectRecipe }  = props
  return (
    <div className="row col">
      <CardsList
        recipes={recipes}
        selectRecipe={selectRecipe}
      />
    </div>
  )
}

export default RecipeList








