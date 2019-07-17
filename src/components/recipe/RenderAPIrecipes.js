import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecipes } from '../../actions/recipeActions'
import { setSearchField } from '../../actions/searchActions'
import RecipeList from './RecipeList'
import LoaderProgressBar from '../LoaderProgressBar'
import SearchBar from '../SearchBar'

class RenderAPIrecipes extends Component {
  componentDidMount = () => {
    this.props.fetchRecipes()
  }

  onSubmit = formValues => {
    this.props.fetchRecipes(formValues)
  }

  render() {
    const { recipes }  = this.props
    return (
      recipes && recipes.isPending
      ? <LoaderProgressBar />
      : <>
          <SearchBar onSubmit={ this.onSubmit } />
          <RecipeList
            recipes={ recipes.recipes  }
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








