import React from 'react'
import CookingImg from './images/cooking.png'
import ClockImg from './images/clock.png'
import { timeFormat } from '../../../myLibrary'
import style from './style'

const PrepTime = ({ cookingMinutes, readyInMinutes }) => {
  const { container_ul } = style.prepTime
  const cookingTime =
    cookingMinutes
    && cookingMinutes > 0
    ? (
      <li className='icon'>
        <img
          className='responsive-img icons_img'
          src={CookingImg}
          alt={`cooking time is ${timeFormat(cookingMinutes)}`} />
          <span>{ timeFormat(cookingMinutes) }</span>
          <p>{ timeFormat(cookingMinutes) } for cooking.</p>
      </li>
    )
    : ''

  const totalPrepTime =
    readyInMinutes
    && readyInMinutes > 0
    ? (
      <li className='icon'>
        <img
          className='responsive-img icons_img'
          src={ClockImg} alt={`ready in ${ timeFormat(readyInMinutes) }`} />
        <span>{ timeFormat(readyInMinutes) }</span>
        <p>Ready in { timeFormat(readyInMinutes) }.</p>
      </li>
    )
    : ''

  return (
      <ul
        className='container'
        id='icons-container'
        style={ container_ul }
      >
        { cookingTime }
        { totalPrepTime }
      </ul>

  )
}

export default PrepTime



