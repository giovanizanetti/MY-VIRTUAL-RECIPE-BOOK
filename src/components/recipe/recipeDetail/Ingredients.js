import React from 'react'
import CheckBox from '../../ChechBox'

// Later I will add some mesures by 'cup' instead of 'grams'
const Ingredients = ({ingredients}) => {
  const ingredientsList = ingredients && ingredients.map(ingredient => {
    const { amount, unitShort } = ingredient.measures.metric
    const useOf = unitShort !== '' ? 'of' : ''
    return (
      <li key={ingredient.id} style={{margin: 20}}>
        <CheckBox />
        {` - ${Math.round(amount)} ${unitShort} ${useOf} ${ingredient.name}`}
      </li>
    )
  })

  return (
    <div className='container' style={{listStyle: 'none'}}>
      <h3>Ingredients</h3>
      { ingredientsList }
    </div>
  )
}

export default Ingredients
