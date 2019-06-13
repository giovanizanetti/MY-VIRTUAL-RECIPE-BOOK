import React from 'react'

const Header = ({title, image}) => {
  const recipeTitle = title
  return (
    <div>
      <h2 style={{ textAlign: 'center' }} >
        {recipeTitle}
      </h2>
      <div className="card-image">
        <img src={image} alt={title}/>
      </div>
    </div>

  )
}

export default Header
