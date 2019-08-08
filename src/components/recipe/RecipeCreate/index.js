import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createRecipe, selectRecipe } from '../../../actions/recipeActions'
import RecipeForm from '../RecipeForm/'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

//This component use a template form (RecipeForm component)
//Later => Check if the title matches any of the recipes from the database,
//Ask if the user wants to replace it or create a new recipe e.g. recipe title(2)

class RecipeCreate extends Component {
  componentDidMount() {
    const { selectRecipe } = this.props
    selectRecipe(null)
  }
  //Check for duplicated recipe title before submiting
  onSubmit = formValues => {
    const { image , myRecipes, history, createRecipe } = this.props
    const checkImg = formValues.image === undefined
    && image !== null

    formValues.image = checkImg && image
    if(myRecipes.find(recipe => recipe.title.toLowerCase() === formValues.title.toLowerCase()))
      return alert(`The recipe ${formValues.title} already exists, please choose a different name`)
     else {
      createRecipe(formValues)
      return history.replace(`/myRecipes`)
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
    { createRecipe, selectRecipe }
  ),
  firestoreConnect([{
    collection: 'recipes'
  }])
)(RecipeCreate)
