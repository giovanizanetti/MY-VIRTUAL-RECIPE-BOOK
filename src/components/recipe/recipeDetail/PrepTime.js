import React from 'react'

const PrepTime = ({ cookingMinutes, readyInMinutes }) => {

  const timeConvert = (minutes) => {
    if(minutes > 59) {
      const hours = Math.floor(minutes / 60)
      const min = minutes % 60
      const spellHour = hours > 1 ? 'hours' : 'hour'
      return `${hours} ${spellHour} and ${min} minutes`
    }
    return `${minutes} minutes`
  }

  const cookingtime =
    cookingMinutes
    && cookingMinutes > 0
    && `This recipe takes ${timeConvert(cookingMinutes)} for cooking`

  const totalPrepTime =
    readyInMinutes && `Ready in ${timeConvert(readyInMinutes)}`

  return (
    <ul className='container'>
      <li>{cookingtime}</li>
      <li>{totalPrepTime}</li>
    </ul>
  )
}

export default PrepTime



