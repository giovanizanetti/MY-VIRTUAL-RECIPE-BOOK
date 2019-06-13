import React from 'react'



// Later I will add some mesures by 'cup' instead of 'grams'
const Ingredients = ({ingredients}) => {
  const ingredientsList = ingredients && ingredients.map(ingredient => {
    const { amount, unitShort } = ingredient.measures.metric
    return (
      <li key={ingredient.id} style={{margin: 20}}>
        {`- ${Math.round(amount)} ${unitShort} of ${ingredient.name}`}
      </li>
    )
  })

  return (
    <li className='container' style={{listStyle: 'none'}}>
      <h3>Ingredients</h3>
      { ingredientsList }
    </li>
  )
}

export default Ingredients
