import React from 'react'

const Header = ({title, image}) => {
  const recipeTitle = title
  return (
    <div style={{paddingTop: 1}}>
      <h4 style={{
        textAlign: 'center',
         }} >
        {recipeTitle}
      </h4>
      <div className="card-image">
        <img src={image} alt={title}/>
      </div>
    </div>

  )
}

export default Header
