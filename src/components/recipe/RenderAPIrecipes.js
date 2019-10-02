import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecipes, setDate } from '../../actions/recipeActions'
import RecipeList from './RecipeList'
import LoaderProgressBar from '../LoaderProgressBar'
import { getDate } from '../../myLibrary'

class RenderAPIrecipes extends Component {
  componentDidMount = () => {
    const { fetchRecipes, recipes, recipesDate, setDate } = this.props
    const recipesList = recipes.recipes
    if(!recipesList.length) return fetchRecipes()
    if (getDate() !== recipesDate) return fetchRecipes() && setDate()
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
          <h4
            style={{
              textAlign: 'center', 
              fontFamily: 'roboto', 
              margin: '2rem', 
              textDecoration: 'underline'
            }}
            >Picked Daily Recipes
          </h4>
          <RecipeList
            recipes={ uniqueRecipes }
            history={ history }
          />
        </div>
    )
  }
}

const mapStateToProps = state => {
  const { recipes, selectedRecipe } = state
  return {
    recipes,
    selectedRecipe,
    recipesDate: recipes.date
  }
}

export default connect(
  mapStateToProps, { fetchRecipes, setDate }
  )(RenderAPIrecipes)








