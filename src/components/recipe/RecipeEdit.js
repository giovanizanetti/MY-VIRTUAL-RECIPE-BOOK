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
    const ID = this.props.match.params.id
    !this.props.selectedRecipe && this.props.fetchRecipeById(ID)
  }

  /* Later => - when submit check whether the recipe already exist in Firestore,
    in case the recipe is coming from the Spoonacular and i not saved in firestore
    a new recipe will be created. So i will have we to call the action creator for
    creating a recipe.
      */
  onSubmit = (formValues) => {
    const ID = this.props.match.params.id
    const IS_SPOONACULAR_ID = isNumber(ID)
    // this.props.editRecipe(ID, formValues)
    IS_SPOONACULAR_ID
    ? this.props.createRecipe(formValues)
    : this.props.editRecipe(ID, formValues)
    return this.props.history.replace(`/recipes/${ID}`)
  }

  render() {
    return (
      !this.props.recipe
      ? <LoaderProgressBar />
      : <div>
          <h3>Edit Recipe</h3>
          <RecipeForm
            onSubmit={this.onSubmit}
            //pick only the the values that I actually change inside the form using pick func from Lodash library.
            initialValues={_.pick(
              this.props.recipe,
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
  }
}

export default compose(
  connect(mapStateToProps, { editRecipe, fetchRecipeById, fetchRecipes, createRecipe }),
  firestoreConnect([{
    collection: 'recipes'
  }])
)(RecipeEdit)

