import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchRecipes, selectRecipe } from '../../../actions/recipeActions'
import LoaderSpinner from '../../LoaderSpinner'
import ListCards from './ListCards.js'

class RecipeList extends Component {
  componentDidMount = () => {
    this.props.fetchRecipes()
  }

  recipeCardsRender = () => {
    const { recipes, selectRecipe} = this.props
    return this.props.recipes.isPending
      ? <LoaderSpinner />
      : <ListCards recipes={recipes} selectRecipe={selectRecipe} />
  }

  render() {
    return (
      <div className='container'>
        <div className="row col">
          {this.recipeCardsRender()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
  }
}

export default connect(mapStateToProps, { fetchRecipes, selectRecipe })(RecipeList)
