import React from 'react'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { selectRecipe } from '../../actions/recipeActions'
import RecipeList from './RecipeList'
import LoaderSpinner from '../LoaderSpinner'

const MyRecipes = (props) => {
  const { recipes } = props
  console.log(props)
  return (
    !recipes
    ? <LoaderSpinner />
    :
      <RecipeList
        recipes={recipes}
      />
  )
}

const mapStateToProps = state => {
  return {
    recipes: state.firestore.ordered.recipes,
    selectedRecipe: state.selectedRecipe
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'recipes'
  }])
)(MyRecipes)
