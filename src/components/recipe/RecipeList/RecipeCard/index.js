import React, { Component } from 'react'
import CardReveal from './CardReveal'
import { trimString } from '../../../../myLibrary'
import { selectRecipe } from '../../../../actions/recipeActions'
import { connect } from 'react-redux'
import style from '../style'
import CheckBox from '../../../CheckBox'
import { selectMultipleRecipes } from '../../../../actions/recipeActions'


class RecipeCard extends Component {

  getKeyByKey = (object, value) => {
    return Object.keys(object).find(key => key === value);
  }

handleCheckBox = e => {
  console.log(this.props.selectedRecipes.map(recipe => this.getKeyByKey(recipe, e.target.value)))
  this.props.selectMultipleRecipes({[e.target.value]: e.target.checked})
}

  render() {
    const { card } = style.recipeCard
    const {
      id, image, title, glutenFree, lowFodmap,
      vegetarian, vegan, dairyFree, readyInMinutes,
      selectRecipe, recipes, cookingMinutes, isActive, checkAll
    } = this.props
    return (
      <div
        className="card small col s12 m6 l4"
        style={ card }
        key={id}
        onClick={() => { selectRecipe(recipes.find(rec => rec.id === id)) }}
        >
          { isActive &&
          <CheckBox
            onChange={this.handleCheckBox}
            value={id}

            checked={ checkAll }
            // isAllChecked={ checkAll }
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
    checkAll: state.checkBoxes.isAllChecked
  }
}

export default connect(mapStateToProps, { selectRecipe, selectMultipleRecipes })(RecipeCard)
