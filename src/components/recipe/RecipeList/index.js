import React, { Component } from 'react'
import LoaderSpinner from '../../LoaderSpinner'
import CardsList from './CardsList.js'

const RecipeList = (props) => {
  console.log(props, 'recipeListttt')
    const { recipes, selectRecipe, selectedRecipe, myRecipes }  = props
    return (

       <div className='container'>
          <div className="row col">
          <CardsList
            recipes={recipes}
            selectRecipe={selectRecipe}
            selectedRecipe={selectedRecipe}
          />
          </div>
        </div>
    )
}

export default RecipeList








