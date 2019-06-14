import React from 'react'

const DairyFree = ({isDairyFree}) => {
  const glutenFree =
    isDairyFree && isDairyFree === true
    ? 'This recipe is dairy free'
    : 'This recipe contains dairy'

  return <li>{glutenFree}</li>
}

export default DairyFree
