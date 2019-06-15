import React from 'react'
import Icon from './images/glutem-free-2.jpg'
import './index.css'

const GlutenFree = ({isGlutenFree}) => {
  const glutenFree =
    isGlutenFree && isGlutenFree === true
    ? <div className='icon'>
        <img className='responsive-img icons_img' src={Icon} alt='glutem-free'/>
        <p>
          Gluten free recipe.
        </p>
      </div>
    : ''

  return <li className='allegen_item'>{glutenFree}</li>
}

export default GlutenFree
