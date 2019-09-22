import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecipes } from '../../actions/recipeActions'
import { setSearchField } from '../../actions/searchActions'
import RecipeList from './RecipeList'
import LoaderProgressBar from '../LoaderProgressBar'
import SearchBar from '../SearchBar'

class RenderAPIrecipes extends Component {
  componentDidMount = () => {
    const { fetchRecipes, recipes } = this.props
    !recipes.recipes.length && fetchRecipes()
    console.log(localStorage)
  }

  onSubmit = formValues => {
    const { fetchRecipes } = this.props
    fetchRecipes(formValues)
  }

  

  render() {
    const { recipes, history }  = this.props

    const uniqueRecipes = Array.from(new Set(recipes.recipes.map(r => r.id)))
      .map(id => recipes.recipes.find(a =>a.id ===id))

    return (
      recipes && recipes.isPending
      ? <LoaderProgressBar />
      : <>
      { recipes.error 
        && <>
            <span style={{fontSize: '2rem', fontWeight: '500'}} className='red-text'>{recipes.error.response.data.message} !!</span>
            <p className='red-text'>Please try a different search term</p>
          </>
      }
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
            recipes={ uniqueRecipes }
            history={ history }
          />
        </>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    selectedRecipe: state.selectedRecipe,
  }
}

export default connect(
  mapStateToProps, { fetchRecipes, setSearchField }
  )(RenderAPIrecipes)








