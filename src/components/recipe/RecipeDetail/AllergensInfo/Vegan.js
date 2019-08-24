import React from 'react'
import Icon from './images/vegan.png'
import './index.css'


const Vegan = ({isVegan}) => {
  const vegan =
    isVegan && isVegan === true
    ? <div className='icon'>
        <img className='responsive-img icons_img' src={Icon} alt='vegetarian'/>
        <p>Vegan recipe.</p>
      </div>
    : ''

  return <li className='allegen_item'>{vegan}</li>
}

export default Vegan
