import React from 'react'

const Servings = ({servings}) => {
  const servPeople =
    servings &&  servings > 1
    ? `This recipe serves ${servings} people`
    : `This recipe serves ${servings} person`

  return <div className='container'>{servPeople}</div>
}

export default Servings
