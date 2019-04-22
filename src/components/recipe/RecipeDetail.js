import React, { Component } from 'react';
import { connect } from 'react-redux'

class Recipedetail extends Component {
  renderOccasions = () => {
    return( 
      this.props.recipe.occasions.length > 0 &&
      this.props.recipe.occasions.map(
        (occasion, index) => !index === -1 
        ? ` ${occasion},` 
        :`${occasion}.`)
    )
  }

  renderIngredients = () => {
    return this.props.recipe.extendedIngredients.map(ingredient => {
      return (
        <div key={ingredient.id}>
          <span>{ingredient.name}</span>
          {`: ${ingredient.measures.metric.amount} ${ingredient.measures.metric.unitShort}`}
        </div>
      )
    })
  }

  render() { 
    console.log(this.props)
    return (
      <div className='container'>
        <div className='card'>
          <h2>{this.props.recipe.title}</h2>
          <img  src={this.props.recipe.image} alt='dish'/>
          <p>{this.props.recipe.occasions.length > 0 ? `This a perfect combination for ${this.renderOccasions()}`: 'Sorry, no occasions sugestions fro this recipe!'}</p>
          <h3>Ingredients</h3>
          <div>{this.renderIngredients()}</div>
          <h3>Instructions</h3>
          {this.props.recipe.instructions}
          <h6>{this.props.recipe.cookingMinutes > 0 
            ? `This recipe takes ${this.props.recipe.cookingMinutes} minutes for cooking`
            : ''}</h6> 
          <div>
            <span>{`Ready in ${this.props.recipe.readyInMinutes} minutes`}</span>
            <p>{`Servings: ${this.props.recipe.servings}`}</p>
            <p>{this.props.recipe.glutenFree ? 'Gluten Free' : 'Contains gluten'}</p>
            <p>{this.props.recipe.lowFodMap ? 'Low Fod Map' : ''}</p>
            <p>{this.props.recipe.vegetarian ? 'Vegetarian' : ''}</p>
            <p>{this.props.recipe.vegan ? 'Vegan' : ''}</p>
            <p>{this.props.recipe.dairyFree ? 'Dairy Free' : 'Contains dairy'}</p>
          </div>
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state, 'I am the state from DEtail')

  return {
    recipe: state.selectedRecipe,
    recipes: state.recipes
  }
}

 
export default connect(mapStateToProps)(Recipedetail)