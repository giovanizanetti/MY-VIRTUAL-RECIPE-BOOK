import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchRecipes, selectRecipe } from '../../../actions/recipeActions'
import LoaderSpinner from '../../LoaderSpinner'
import CardsList from './CardsList.js'

class RecipeList extends Component {
  componentDidMount = () => {
    this.props.fetchRecipes()
  }
  render() {
    const { recipes, selectRecipe, selectedRecipe }  = this.props
    return (
      this.props.recipes.isPending
      ? <LoaderSpinner />
      : <div className='container'>
          <div className="row col">
          <CardsList
            recipes={recipes}
            selectRecipe={selectRecipe}
            selectedRecipe={selectedRecipe}
          />
          </div>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    selectedRecipe: state.selectedRecipe
  }
}

export default connect(mapStateToProps, { fetchRecipes, selectRecipe })(RecipeList)
