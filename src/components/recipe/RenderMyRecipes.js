import React from 'react'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import RecipeList from './RecipeList'
import LoaderProgressBar from '../LoaderProgressBar'

const MyRecipes = (props) => {
  const { recipes } = props
  return (
    !recipes
    ? <LoaderProgressBar />
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
