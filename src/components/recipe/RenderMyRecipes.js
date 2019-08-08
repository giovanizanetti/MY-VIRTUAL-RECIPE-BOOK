import React, { Component } from 'react'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import RecipeList from './RecipeList'
import LoaderProgressBar from '../LoaderProgressBar'
import NoRecipes from './NoRecipes'
import { setSearchField } from '../../actions/searchActions'
import MyRecipesSearchBar from '../MyRecipesSearchBar'

class MyRecipes extends Component {
componentDidMount() {
  const { setSearchField } = this.props
  setSearchField('')
}

  render() {
    const { recipes, searchField, setSearchField } = this.props
    const filteredRecipes = recipes && recipes.filter(recipe => {
      return recipe.title && recipe.title.toLowerCase().includes(searchField.toLowerCase())
    })

    const handleSearch = (e) => setSearchField(e.target.value)

    const renderRecipeList =
      recipes < 1
      ? <NoRecipes />
      : <>
          <MyRecipesSearchBar handleSearch={ handleSearch } />
          {
            filteredRecipes
            && searchField.length > 0
            && filteredRecipes.length < 1
            ? <span className='red-text'>Sorry! NO RECIPES FOUND!!</span>
            : <RecipeList recipes={ filteredRecipes } />
          }
        </>

    return (
      !recipes
      ? <LoaderProgressBar />
      : renderRecipeList
    )
  }
}


const mapStateToProps = state => {
  return {
    recipes: state.firestore.ordered.recipes,
    selectedRecipe: state.selectedRecipe,
    searchField: state.search.searchField
  }
}

export default compose(
  connect(mapStateToProps, { setSearchField }),
  firestoreConnect([{
    collection: 'recipes'
  }])
)(MyRecipes)
