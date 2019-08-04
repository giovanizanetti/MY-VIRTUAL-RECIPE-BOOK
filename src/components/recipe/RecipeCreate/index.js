import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createRecipe } from '../../../actions/recipeActions'
import RecipeForm from '../RecipeForm/'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

//This component use a template form (RecipeForm component)
//Later => Check if the title matches any of the recipes from the database,
//Ask if the user wants to replace it or create a new recipe e.g. recipe title(2)

class RecipeCreate extends Component {

  //Check for duplicated recipe title before ubmiting
  onSubmit = formValues => {
    const checkImg = formValues.image === undefined
    && this.props.image !== null

    formValues.image = checkImg && this.props.image
    if(this.props.myRecipes.find(recipe => recipe.title.toLowerCase() === formValues.title.toLowerCase()))
      return alert(`The recipe ${formValues.title} already exists, please choose a different name`)
     else {
       this.props.createRecipe(formValues)
      return this.props.history.replace(`/myRecipes`)
    }
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

const mapStateToProps = state => {
  return {
    myRecipes: state.firestore.ordered.recipes,
    image: state.image.url
  }
}

export default compose(
  connect(
    mapStateToProps,
    { createRecipe }
  ),
  firestoreConnect([{
    collection: 'recipes'
  }])
)(RecipeCreate)
