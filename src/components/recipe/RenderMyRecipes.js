import React from 'react'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import RecipeList from './RecipeList'
import LoaderProgressBar from '../LoaderProgressBar'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar'

const MyRecipes = (props) => {
  const { recipes } = props
  const renderRecipeList =
    recipes < 1
    ? <div
        style={{ display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
      >
        <span>You have no recipes!</span>
        <div
          className='container center'
          style={{display: 'flex', justifyContent: 'space-around'}}>
          <Link className='btn' to='/recipe/new'>Create a recipe</Link>
          <Link className='btn' to='/'>Search for recipes</Link>
        </div>

      </div>
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
