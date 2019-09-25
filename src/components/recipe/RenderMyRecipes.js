import React, { Component } from 'react'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { setSearchField } from '../../actions/searchActions'
import RecipeList from './RecipeList'
import LoaderProgressBar from '../LoaderProgressBar'
import NoRecipes from './NoRecipes'
import MyRecipesSearchBar from '../MyRecipesSearchBar'

class MyRecipes extends Component {
  componentDidMount() {
    const { setSearchField } = this.props
    setSearchField('')
  }

  render() {
    const { recipes, searchField, setSearchField, match } = this.props
    const filteredRecipes = recipes && recipes.filter(recipe => {
      return recipe.title && recipe.title.toLowerCase().includes(searchField.toLowerCase())
    })
    const isFavorites = match.path === "/myRecipes/favorites"
    
    const favorites = filteredRecipes && filteredRecipes.filter(recipe => recipe.favorite)
    const handleSearch = (e) => setSearchField(e.target.value)

    const renderRecipeList =
      recipes < 1
      ? <NoRecipes />
      : <>
          <MyRecipesSearchBar handleSearch={ handleSearch } />
          <h4
            style={{
              textAlign: 'center', 
              fontFamily: 'roboto', 
              margin: '1rem', 
              textDecoration: 'underline'
            }}
            >{!isFavorites ? 'My Recipes' : 'Favorites'}
          </h4>
          {
            filteredRecipes
            && searchField.length > 0
            && filteredRecipes.length < 1
            ? <span className='red-text'>Sorry! NO RECIPES FOUND!!</span>
            : <RecipeList   
                recipes={ !isFavorites ? filteredRecipes : favorites }
                id={'myRecipes'} 
                isFavorites={ isFavorites }
                />
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
  const { firebase, firestore, selectedRecipe, search } = state
  const currentUser = firebase.auth.uid
  return {
    recipes: firestore.ordered.recipes 
      && firestore.ordered.recipes.filter(rec => rec.userId === currentUser),
    selectedRecipe: selectedRecipe,
    searchField: search.searchField,
  }
}

export default compose(
  connect(mapStateToProps, { setSearchField }),
  firestoreConnect([{
    collection: 'recipes'
  }])
)(MyRecipes)
