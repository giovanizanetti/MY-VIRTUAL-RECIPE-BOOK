import React from 'react'

const Header = ({title, image}) => {
  const recipeTitle = title
  return (
    <div className='container' style={{paddingTop: 1}}>
      <h5 style={{
        textAlign: 'center',
         }} >
        {recipeTitle}
      </h5>
      <div className="card-image">
        <img src={image} alt={title}/>
      </div>
    </div>

  )
}

export default Header
