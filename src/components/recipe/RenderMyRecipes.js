import React from 'react'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import RecipeList from './RecipeList'
import LoaderProgressBar from '../LoaderProgressBar'

const MyRecipes = (props) => {
  const { recipes } = props
  const renderRecipeList = recipes < 1
    ? <div
      className='container'
        style={{ display: 'flex',
                flexDirection: 'column',
              }}
      >
        <span>You have no recipes!</span>
        <div
          className='container center'
          style={{display: 'flex', justifyContent: 'space-around'}}>
          <button className='btn'>Create a recipe</button>
          <button className='btn'>Search for recipes</button>
        </div>

      </div>
    : <RecipeList recipes={recipes} />
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
