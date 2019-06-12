import React from 'react'

const Servings = ({servings}) => {
  const servPeople = () => {
    if (servings &&  servings !== 0) {
      return servings > 1
      ? `This recipe serves ${servings} people`
      : `This recipe serves ${servings} person`
     }
     return null
  }
  return <div className='container'>{ servPeople() }</div>
}

export default Servings
