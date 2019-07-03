import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecipes, editRecipe, fetchRecipeById } from '../../actions/recipeActions'
import _ from 'lodash'
import RecipeForm from './RecipeForm/'
import LoaderSpinner from '../LoaderSpinner'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

//This component make use of a tempate (RecipeForm component)

class RecipeEdit extends Component {
  componentDidMount(){
    const ID = this.props.match.params.id
    !this.props.selectedRecipe && this.props.fetchRecipeById(ID)
  }

  onSubmit = formValues => this.props.editRecipe(this.props.match.params.id, formValues)

  render() {
    console.log(this.props, 'hiiii')
    return (
      !this.props.recipe
      ? <LoaderSpinner />
      : <div>
          <h3>Edit a Recipe</h3>
          <RecipeForm
            onSubmit={this.onSubmit}
            //pick only the the values that I actually change inside the form using pick func from Lodash library.
            initialValues={_.pick(this.props.recipe, 'title', 'cooking time', 'preparation time', 'ingredients', 'instructions', 'is gluten free')}
          />
        </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { firestore, selectedRecipe, firebase} = state
  const { recipes } = firestore.ordered
  const ID = ownProps.match.params.id
  const ONLY_NUMBERS_REGEX = /^[0-9]*$/
  const IS_SPOONACULAR_ID = ONLY_NUMBERS_REGEX.test(ID)

  return {
    auth: firebase.auth,
    selectedRecipe,
    recipe: IS_SPOONACULAR_ID === true
      ? selectedRecipe
      : recipes && recipes.find(rec => rec.id === ID),
  }
}

  export default compose(
    connect(mapStateToProps, { editRecipe, fetchRecipeById, fetchRecipes }),
    firestoreConnect([{
      collection: 'recipes'
    }])
  )(RecipeEdit)

