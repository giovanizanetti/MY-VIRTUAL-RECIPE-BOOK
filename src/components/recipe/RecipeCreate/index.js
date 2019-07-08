import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createRecipe } from '../../../actions/recipeActions'
import RecipeForm from '../RecipeForm/'

//This component use a template form (RecipeForm component)
//Later => Check if the title matches any of the recipes from the database,
//Ask if the user wants to replace it or create a new recipe e.g. recipe title(2)

class RecipeCreate extends Component {
  onSubmit = formValues => {
    this.props.createRecipe(formValues)
  }

  render() {
    return (
      <div className='center'>
        <h3>Create a Recipe</h3>
        <RecipeForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}

export default connect(null, { createRecipe }) (RecipeCreate)
