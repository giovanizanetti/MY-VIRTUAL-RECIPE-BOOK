import React from 'react'
import CardsList from './CardsList.js'

const RecipeList = (props) => {
  const { recipes }  = props
  return (
    <div className="row col">
      <CardsList
        recipes={recipes}
      />
    </div>
  )
}

export default RecipeList








