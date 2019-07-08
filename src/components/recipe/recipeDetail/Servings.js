import React from 'react'

const Servings = ({servings}) => {
  const servPeople = () => {
    if (servings &&  servings !== 0) {
      return servings > 1
      ? `It is ideal for ${servings} people.`
      : `It is ideal for ${servings} person.`
     }
     return null
  }
  return <div className='container'>{ servPeople() }</div>
}

export default Servings
