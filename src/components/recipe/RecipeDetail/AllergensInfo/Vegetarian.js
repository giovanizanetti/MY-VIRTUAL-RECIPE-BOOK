import React from 'react'
import Icon from './images/vegetarian.png'
import './index.css'

const Vegetarian = ({isVegetarian}) => {
  const vegetarian =
    isVegetarian && isVegetarian === true
    ? <div className='icon'>
        <img className='responsive-img icons_img' src={Icon} alt='vegetarian'/>
        <p>Vegetarian recipe.</p>
      </div>
    : ''
  return <li className='allegen_item'>{vegetarian}</li>
}

export default Vegetarian
