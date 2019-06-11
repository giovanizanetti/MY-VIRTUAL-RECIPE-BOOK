import React from 'react'

const Vegan = ({isVegan}) => {
  const vegan =
    isVegan && isVegan === true
    ? 'This recipe is vegan'
    : 'This recipe is not vegan'

  return <li>{vegan}</li>
}

export default Vegan
