import React from 'react'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { selectRecipe } from '../../actions/recipeActions'
import RecipeList from './RecipeList'
import LoaderSpinner from '../LoaderSpinner'

const MyRecipes = (props) => {
  console.log(props)
  const { recipes, selectRecipe, selectedRecipe } = props
  return (
    !recipes
    ? <LoaderSpinner />
    :
      <RecipeList
        recipes={recipes}
        selectRecipe={selectRecipe}
        selectedRecipe={selectedRecipe}
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
  connect(mapStateToProps, { selectRecipe }),
  firestoreConnect([{
    collection: 'recipes'
  }])
)(MyRecipes)
