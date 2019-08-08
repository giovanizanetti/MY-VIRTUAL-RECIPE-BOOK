import React from 'react'
import style from './style'

const Header = ({title, image}) => {
  const recipeTitle = title
  const { headerTitle, container } = style.header
  return (
    <div
      className='container' style={ container }>
      <div
        className="card-image"
        style={{position: 'relative'}}
      >
      <h5 style={ headerTitle } >
        { recipeTitle }
      </h5>
        <img src={ image } alt={ title }/>
      </div>
    </div>

  )
}

export default Header
