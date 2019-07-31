import React, { Component } from 'react'
import CardsList from './CardsList.js'
import Select from './Select'

class RecipeList extends Component {


  render() {

    // const { recipes }  = props
    const { recipes } = this.props
    return (
      <div className="row col">
        <Select recipesIds={recipes.map(recipe => recipe.id)}
          />
        <CardsList
          recipes={recipes}
        />
      </div>
    )
  }
}

export default RecipeList








