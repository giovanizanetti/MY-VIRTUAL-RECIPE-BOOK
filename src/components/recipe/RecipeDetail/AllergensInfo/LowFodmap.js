import React from 'react'
import Icon from './images/lowFodmap.jpg'
import './index.css'

const LowFodmap = ({ isLowFodmap }) => {
  const lowFodmap =
    isLowFodmap
    && isLowFodmap === true
    ? <div className='icon'>
        <img className='responsive-img icons_img' src={Icon} alt='vegetarian'/>
        <p>Low Fodmap recipe.</p>
      </div>
    : ''
  return <li className='allegen_item'>{lowFodmap}</li>
}

export default LowFodmap
