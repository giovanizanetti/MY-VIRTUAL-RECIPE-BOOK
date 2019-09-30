import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecipes } from '../../actions/recipeActions'
import { setSearchField } from '../../actions/searchActions'
import RecipeList from './RecipeList'
import LoaderProgressBar from '../LoaderProgressBar'
import SearchBar from '../SearchBar'
import { getDate } from '../../myLibrary'

class RenderAPIrecipes extends Component {
  componentDidMount = () => {
    const { fetchRecipes, recipes, date } = this.props
    !recipes.recipes.length 
    || getDate() !== date 
    && fetchRecipes()
  }

  onSubmit = formValues => {
    const { fetchRecipes } = this.props
    fetchRecipes(formValues)
  }

  

  render() {
    const { recipes, history }  = this.props

    const uniqueRecipes = Array.from(new Set(recipes && recipes.recipes.map(r => r.id)))
      .map(id => recipes && recipes.recipes.find(a => a.id === id))

    return (
      recipes && recipes.isPending
      ? <LoaderProgressBar />
      : <div>
      { recipes.error && !recipes.recipes
        && <>
            <span style={{fontSize: '2rem', fontWeight: '500'}} className='red-text'>{recipes.error.response.data.message} !!</span>
          </>
      }
          {/* <SearchBar id='API' onSubmit={ this.onSubmit } /> */}
          <h4
            style={{
              textAlign: 'center', 
              fontFamily: 'roboto', 
              margin: '2rem', 
              textDecoration: 'underline'
            }}
            >Picked Daily Recipes
          </h4>
          <div>
            <RecipeList
              recipes={ uniqueRecipes }
              history={ history }
            />
          </div>
        </div>
    )
  }
}

const mapStateToProps = state => {
  const { recipes, selectedRecipe } = state
  return {
    recipes,
    selectedRecipe,
    date: recipes.date
  }
}

export default connect(
  mapStateToProps, { fetchRecipes, setSearchField }
  )(RenderAPIrecipes)








