import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecipes } from '../../actions/recipeActions'
import RecipeList from './RecipeList'
import LoaderProgressBar from '../LoaderProgressBar'
import SearchBar from '../SearchBar'

class RenderAPIrecipes extends Component {
  componentDidMount = () => {
    this.props.fetchRecipes()
  }
  render() {
    const { recipes }  = this.props
    return (
      recipes && recipes.isPending
      ? <LoaderProgressBar />
      : <>
          <SearchBar />
          <RecipeList
            recipes={recipes.recipes}
          />
        </>
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








