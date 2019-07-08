import React from 'react'
import { arrToStringPunctuation } from '../../../myLibrary'

const Cuisines = ({cuisines}) => {
  const isPlural = cuisines.length > 1 ? 'cuisines' : 'cuisine'
  const displayCuisines =
    cuisines
    && arrToStringPunctuation(cuisines) !== null
    && arrToStringPunctuation(cuisines) !== undefined
    ? `This is a tipical dish from ${arrToStringPunctuation(cuisines)} ${isPlural}.`
    : null

  return <div className='container'>{displayCuisines}</div>
}

export default Cuisines
