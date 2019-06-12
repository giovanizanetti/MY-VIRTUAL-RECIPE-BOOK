import React from 'react'

const Ingredients = ({ingredients}) => {
  const ingredientsList = ingredients && ingredients.map(ingredient => {
    const { amount, unitShort } = ingredient.measures.metric
    return (
      <div key={ingredient.id}>
        {`- ${Math.round(amount)} ${unitShort} of ${ingredient.name}`}
      </div>
    )
  })

  return (
    <div className='container'>
      <h3>Ingredients</h3>
      { ingredientsList }
    </div>
  )
}

export default Ingredients
