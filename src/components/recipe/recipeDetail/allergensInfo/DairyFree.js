import React from 'react'
import Icon from './images/dairyFree.jpg'
import './index.css'

const DairyFree = ({isDairyFree}) => {
  const dairyFree =
    isDairyFree && isDairyFree === true
    ? <div className='icon'>
        <img className='responsive-img icons_img' src={Icon} alt='vegetarian'/>
        <p>Dairy free recipe.</p>
      </div>
    : ''
  return <li className='allegen_item'>{dairyFree}</li>
}

export default DairyFree
