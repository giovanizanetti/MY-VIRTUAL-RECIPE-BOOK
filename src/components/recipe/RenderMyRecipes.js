import React from 'react'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import RecipeList from './RecipeList'
import LoaderProgressBar from '../LoaderProgressBar'
import SearchBar from '../SearchBar'
import NoRecipes from './NoRecipes'

const MyRecipes = (props) => {
  const { recipes } = props
  const renderRecipeList =
    recipes < 1
    ? <NoRecipes />
    : <>
        <SearchBar />
        <RecipeList recipes={recipes} />
      </>

  return (
    !recipes
    ? <LoaderProgressBar />
    : renderRecipeList
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
