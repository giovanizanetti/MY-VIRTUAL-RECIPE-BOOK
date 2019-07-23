import React from 'react'
import CheckBox from '../../ChechBox'
import style from './style'
import { connect } from 'react-redux'

// Later I will add some mesures by 'cup' instead of 'grams'
//when user check the item of during the preparation pass a line through

const Ingredients = ({ ingredients, prepare }) => {
  const { container, ingredient_li } = style.ingredients
  const ingredientsList = ingredients && ingredients.map(ingredient => {
    const { amount, unitShort } = ingredient.measures.metric
    const useOf = unitShort !== '' ? 'of' : ''
    return (
      <li key={ingredient.id} style={ ingredient_li }>
        { prepare && <CheckBox /> }
        {` - ${Math.round(amount)} ${unitShort} ${useOf} ${ingredient.name}`}
      </li>
    )
  })

  return (
    <div className='container' style={ container }>
      <h3>Ingredients</h3>
      { ingredientsList }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    prepare: state.checkBoxes.active
  }
}

export default connect(mapStateToProps)(Ingredients)
