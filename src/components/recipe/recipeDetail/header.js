import React from 'react'
import style from './style'

const Header = ({title, image}) => {
  const recipeTitle = title
  const { headerTitle, container } = style.header
  return (
    <div className='container' style={ container }>
      <h5 style={ headerTitle } >
        { recipeTitle }
      </h5>
      <div className="card-image">
        <img src={ image } alt={ title }/>
      </div>
    </div>

  )
}

export default Header
