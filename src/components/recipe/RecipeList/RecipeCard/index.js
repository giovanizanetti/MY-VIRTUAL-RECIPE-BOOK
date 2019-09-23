import React, { Component } from 'react'
import CardReveal from './CardReveal'
import { trimString } from '../../../../myLibrary'
import { selectRecipe } from '../../../../actions/recipeActions'
import { connect } from 'react-redux'
import style from '../style'
import CheckBox from '../../../CheckBox'
import { selectMultipleRecipes, unselect } from '../../../../actions/recipeActions'
import Favorite from '../../RecipeDetail/Favorite'

class RecipeCard extends Component {
  componentDidMount() {
    const { selectedRecipes, unselect } = this.props
    selectedRecipes.length > 0
    && selectedRecipes.map(rec => unselect(rec))
  }

  handleCheckBox = e => {
    const { checked, value } = e.target
    const { selectMultipleRecipes, unselect } = this.props
    checked && selectMultipleRecipes(value)
    !checked && unselect(e.target.value)
  }

  render() {
    const { card } = style.recipeCard
    const {
      id, image, title, glutenFree, lowFodmap,
      vegetarian, vegan, dairyFree, readyInMinutes,
      selectRecipe, recipes, cookingMinutes, isActive,
      isAllChecked, key, favorite
    } = this.props
    return (
      <div
        className="card small col s12 m6 l4"
        style={ card }
        key={ key}
        onClick={() => { selectRecipe(recipes.find(rec => rec.id === id)) }}
        >
          { isActive &&
          <CheckBox
            onChange={ this.handleCheckBox }
            value={ id }
            isAllChecked={ isAllChecked }
            style={{
              position: 'absolute',
              zIndex: '12',
              pointerEvents: 'inherit',
              opacity: 'unset'}}
          />
        }
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={ image ? image : undefined } alt={ title } />
        </div>
        <span className="card-title activator grey-text text-darken-4">
          { trimString(title, 40) }
        </span>
        <Favorite 
          style={{
            position:'absolute',
            bottom: '1rem',
            right: '1rem',
            fontSize: '2rem',
            color: 'darkred',
          }}
          favorite={ favorite && favorite }
        />

        <CardReveal
          title={ title }
          id={ id }
          isGlutenFree={ glutenFree }
          isLowFodmap={ lowFodmap }
          isVegetarian={ vegetarian }
          isVegan={ vegan }
          isDairyFree={ dairyFree }
          readyInMinutes={ readyInMinutes }
          cookingMinutes={ cookingMinutes }
        />
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    selectedRecipe: state.selectedRecipe,
    selectedRecipes: state.selectedRecipes,
    isActive: state.checkBoxes.active,
    isAllChecked: state.checkBoxes.isAllChecked
  }
}

export default connect(
  mapStateToProps, {
    selectRecipe,
    selectMultipleRecipes,
    unselect
  })(RecipeCard)
