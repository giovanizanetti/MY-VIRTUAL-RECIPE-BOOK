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
    const { recipes, history, error }  = this.props
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
          >Recipes of the day
        </h4>
        <RecipeList
          recipes={ filteredRecipes }
          history={ history }
        />
      </> 

    return (
      error 
      ? <div 
          className='center red-text'
          style={ NoRecipesStyle }
          >
            Sorry, No recipes founds! Try searching for a different term.
        </div>
      : Recipes
    )
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    selectedRecipe: state.selectedRecipe,
    error: state.recipes.error && state.recipes.error.response.data.message
  }
}

export default connect(
  mapStateToProps, { fetchRecipes, setSearchField }
  )(RenderAPIrecipes)








