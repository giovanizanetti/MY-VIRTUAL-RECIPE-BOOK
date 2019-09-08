import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecipes } from '../../actions/recipeActions'
import { setSearchField } from '../../actions/searchActions'
import RecipeList from './RecipeList'
import LoaderProgressBar from '../LoaderProgressBar'
import SearchBar from '../SearchBar'

class RenderAPIrecipes extends Component {
  componentDidMount = () => {
    const { fetchRecipes } = this.props
    fetchRecipes()
  }
  
  onSubmit = formValues => {
    const { fetchRecipes } = this.props
    fetchRecipes(formValues)
  }

  render() {
    const NoRecipesStyle = { 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '80vh', 
      fontSize: '1.5rem',
      fontWeight: '600'
    }
    const { recipes, history, error, searchField }  = this.props
    const seen = new Set()
    const filteredRecipes = recipes.recipes.filter(recipes => {
      const duplicate = seen.has(recipes.id)
      seen.add(recipes.id)
      return !duplicate
    })

    

    const Recipes = recipes && recipes.isPending
    ? <LoaderProgressBar />
    : <>
        <SearchBar id='API' onSubmit={ this.onSubmit } />
        <h4
          style={{
            textAlign: 'center', 
            fontFamily: 'roboto', 
            margin: '1rem', 
            textDecoration: 'underline'
          }}
          >Picked Recipes
        </h4>
        <RecipeList
          recipes={ filteredRecipes }
          history={ history }
        />
      </> 
    return (
      error 
      ? <>
          <SearchBar id='API' onSubmit={ this.onSubmit } />
          <div 
              className='center red-text'
              style={ NoRecipesStyle }
              >
                Sorry, No recipes founds! Try searching for a different term.
            </div>
          </>
      : Recipes
    )
  }
}

const mapStateToProps = state => {
  const { recipes, selectedRecipe, search } = state 
  return {
    recipes: recipes,
    selectedRecipe: selectedRecipe,
    error: recipes.error && recipes.error.response.data.message,
    searchField: search.searchField
  }
}

export default connect(
  mapStateToProps, { fetchRecipes, setSearchField }
  )(RenderAPIrecipes)








