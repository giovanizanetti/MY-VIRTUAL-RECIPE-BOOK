import React from 'react'

const PrepTime = ({ cookingMinutes, readyInMinutes }) => {

//   The timeFormat function:
//  - rounds numbers to the nearest integer
//  - transforms minutes into hours,
//  - check for the correct plural and singular
  const timeFormat = (minutes) => {
    if(minutes > 59) {
      const roundedHours = Math.floor(minutes / 60)
      const hours =  roundedHours >= 2 ? `${roundedHours} hours` : `${roundedHours} hour`
      const min = minutes % 60 === 0 ? '' : ` and ${minutes % 60} minutes`
      return hours + min
    }
    return minutes + ' minutes'
  }

  const cookingtime =
    cookingMinutes
    && cookingMinutes === 0
    ? null
    : cookingMinutes > 0
    && `This recipe takes ${timeFormat(cookingMinutes)} for cooking.`

  const totalPrepTime =
    readyInMinutes && `Ready in ${timeFormat(readyInMinutes)}`

  return (
      <ul
        className='container'
        style={{paddingTop: 20 }}
      >
        <li>{cookingtime}</li>
        <li>{totalPrepTime}</li>
      </ul>

  )
}

export default PrepTime



