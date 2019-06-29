import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecipes, selectRecipe } from '../../actions/recipeActions'
import RecipeList from './RecipeList'
import LoaderSpinner from '../LoaderSpinner'

class RenderAPIrecipes extends Component {
  componentDidMount = () => {
    this.props.fetchRecipes()
  }
  render() {
    const { recipes }  = this.props
    return (
      recipes.isPending
      ? <LoaderSpinner />
      : <RecipeList
          recipes={recipes.recipes}
        />
    )
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    selectedRecipe: state.selectedRecipe
  }
}

export default connect(
  mapStateToProps, { fetchRecipes }
  )(RenderAPIrecipes)








