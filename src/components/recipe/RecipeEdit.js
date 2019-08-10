import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecipes, editRecipe, fetchRecipeById, createRecipe } from '../../actions/recipeActions'
import _ from 'lodash'
import RecipeForm from './RecipeForm/'
import LoaderProgressBar from '../LoaderProgressBar'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { isNumber } from '../../myLibrary'

//This component make use of a tempate (RecipeForm component)
class RecipeEdit extends Component {
  componentDidMount(){
    const { selectedRecipe, match, fetchRecipeById } = this.props
    const ID = match.params.id
    !selectedRecipe && fetchRecipeById(ID)
  }

  onSubmit = (formValues) => {
    const checkImg = this.props.image
    formValues.image = checkImg
    && this.props.image

    const isNewImg = this.props.imageInput
    && this.props.imageInput !== '/static/media/placeholder.7eade072.jpg'
    formValues.image = isNewImg && this.props.imageInput
    const ID = this.props.match.params.id
    const IS_SPOONACULAR_ID = isNumber(ID)

    IS_SPOONACULAR_ID
    ? this.props.createRecipe(formValues)
    : this.props.editRecipe(ID, formValues)
    return this.props.history.replace(`/recipes/${ID}`)
  }

  render() {
    const { recipe } = this.props
    return (
      !recipe
      ? <LoaderProgressBar />
      : <div>
          <h3>Edit Recipe</h3>
          <RecipeForm
            onSubmit={this.onSubmit}
            //pick only the the values that I actually change inside the form using pick func from Lodash library.
            initialValues={_.pick(
              recipe,
              'title',
              'cookingMinutes',
              'cuisines',
              'readyInMinutes',
              'extendedIngredients',
              'analyzedInstructions',
              'occasions',
              'glutenFree',
              'vegan',
              'vegetarian',
              'dairyFree',
              'lowFodmap',
              )}
          />
        </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { firestore, selectedRecipe, firebase} = state
  const { recipes } = firestore.ordered
  const ID = ownProps.match.params.id
  const IS_SPOONACULAR_ID = isNumber(ID)
  return {
    auth: firebase.auth,
    selectedRecipe,
    recipe: IS_SPOONACULAR_ID === true
      ? selectedRecipe
      : recipes && recipes.find(rec => rec.id === ID),
    image: state.selectedRecipe && state.selectedRecipe.image,
    imageInput: state.image.url
  }
}

export default compose(
  connect(mapStateToProps, { editRecipe, fetchRecipeById, fetchRecipes, createRecipe }),
  firestoreConnect([{
    collection: 'recipes'
  }])
)(RecipeEdit)

