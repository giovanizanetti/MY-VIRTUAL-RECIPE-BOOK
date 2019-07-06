import React from 'react'
import CheckBox from '../../ChechBox'
import style from './style'

// Later I will add some mesures by 'cup' instead of 'grams'
const Ingredients = ({ingredients}) => {
  const { container, ingredient_li } = style.ingredients
  const ingredientsList = ingredients && ingredients.map(ingredient => {
    const { amount, unitShort } = ingredient.measures.metric
    const useOf = unitShort !== '' ? 'of' : ''
    return (
      <li key={ingredient.id} style={ ingredient_li }>
        <CheckBox />
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

export default Ingredients
