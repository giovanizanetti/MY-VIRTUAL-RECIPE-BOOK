import React from 'react'

const Vegetarian = ({isVegetarian}) => {
  const vegetarian =
    isVegetarian && isVegetarian === true
    ? 'This recipe is vegetarian'
    : 'This recipe is not vegetarian'

  return <li>{vegetarian}</li>
}

export default Vegetarian
