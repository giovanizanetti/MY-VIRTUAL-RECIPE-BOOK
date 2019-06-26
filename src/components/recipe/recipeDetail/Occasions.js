import React from 'react'
import { arrToStringPunctuation } from '../../../myLibrary'

const Occasions = ({occasions}) => {
  const displayOcassion =
    arrToStringPunctuation(occasions) !== null && arrToStringPunctuation(occasions) !== undefined
    ? `This recipe is a perfect combination for ${arrToStringPunctuation(occasions)}.`
    : null

  return <div className='container'>{displayOcassion}</div>
}

export default Occasions
