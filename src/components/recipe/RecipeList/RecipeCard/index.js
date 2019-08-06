import React, { Component } from 'react'
import CardReveal from './CardReveal'
import { trimString } from '../../../../myLibrary'
import { selectRecipe } from '../../../../actions/recipeActions'
import { connect } from 'react-redux'
import style from '../style'
import CheckBox from '../../../CheckBox'
import { selectMultipleRecipes, unselect } from '../../../../actions/recipeActions'


class RecipeCard extends Component {
  componentDidMount() {
    this.props.selectedRecipes.length > 0
    && this.props.selectedRecipes.map( rec => this.props.unselect(rec))
  }

  handleCheckBox = e => {
    e.target.checked && this.props.selectMultipleRecipes(e.target.value)
    !e.target.checked && this.props.unselect(e.target.value)
  }

  render() {
    const { card } = style.recipeCard
    const {
      id, image, title, glutenFree, lowFodmap,
      vegetarian, vegan, dairyFree, readyInMinutes,
      selectRecipe, recipes, cookingMinutes, isActive, isAllChecked
    } = this.props
    console.log(image)
    return (
      <div
        className="card small col s12 m6 l4"
        style={ card }
        key={id}
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
        {/*  */}
        {/*Later => Use Header component and pass style as prop.
        Make use of default props in Header component if necessary */}
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={image} alt={title} />
        </div>
        <span className="card-title activator grey-text text-darken-4">
          { trimString(title, 40) }
        </span>
        <CardReveal
          title={title}
          id={id}
          isGlutenFree={glutenFree}
          isLowFodmap={lowFodmap}
          isVegetarian={vegetarian}
          isVegan={vegan}
          isDairyFree={dairyFree}
          readyInMinutes={readyInMinutes}
          cookingMinutes={cookingMinutes}
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
    // recipes: state.firestore.ordered.recipes
    isAllChecked: state.checkBoxes.isAllChecked
  }
}

export default connect(
  mapStateToProps,
  { selectRecipe, selectMultipleRecipes, unselect })
  (RecipeCard)
