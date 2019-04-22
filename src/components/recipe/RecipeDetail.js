import React, { Component } from 'react';
import { connect } from 'react-redux'

class Recipedetail extends Component {
  renderInstructions = () => {
    return recipe.analyzedInstructions.steps.map(step => <li>{`${step.number} - ${step.step}`}</li>)
  }

  renderOccasions = () => {
    return recipe.occasions.length 
    ? recipe.occasions.map((occasion, index) => !index === -1 ? `${occasion},` :`${occasion}.`)
    : ''
}
  
  render() { 
    return (
      <div className='container'>
        <div className='card'>
          <h2>Title</h2>
          <p>This recipe is a perfect</p>
          <p>This recipe is a perfect combination for {this.renderOccasions()}</p>
          <h3>Instructions</h3>
          <ul>{this.renderInstructions}</ul>
          <h3>{this.recipe.cookingMinutes > 0 ? this.recipe.cookingMinutes : ''}</h3>
  
        </div>
      </div>
    )
  }
}
 
export default Recipedetail;