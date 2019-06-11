import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createRecipe } from '../../actions/recipeActions'
import RecipeForm from './RecipeForm'

//This component use a template form (RecipeForm component)

class RecipeCreate extends Component {
  onSubmit = formValues => {
    this.props.createRecipe(formValues)
  }

  render() {
    return (
      <div className='container center'>
        <h3>Create a Recipe</h3>
        <RecipeForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}




export default connect(null, { createRecipe }) (RecipeCreate)
