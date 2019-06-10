import React from 'react'

const GlutenFree = ({isGlutenFree}) => {
  const glutenFree =
    isGlutenFree && isGlutenFree === true
    ? 'This recipe is gluten free'
    : 'This recipe contains gluten'

  return <li>{glutenFree}</li>
}

export default GlutenFree
