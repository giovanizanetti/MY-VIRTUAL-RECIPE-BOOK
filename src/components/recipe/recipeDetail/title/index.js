import React from 'react'

const Title = ({title}) => {
  const recipeTitle = title
  return (
    <h2
      style={{ textAlign: 'center' }}
    >
      {recipeTitle}
    </h2>
  )
}

export default Title
