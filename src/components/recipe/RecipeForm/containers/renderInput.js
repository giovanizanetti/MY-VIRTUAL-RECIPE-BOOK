import React from 'react'
import { renderErrors } from './formErrors'
import Cleave from 'cleave.js/react'


export const renderInput = ({ input, label, meta, id , type }) => {
  console.log(meta)
  const className = `input-field col ${id === 'prepTime' || id === 'cookingMin' ? 's6': 's12'}${meta.error && meta.touched ? 'wrong' : ''}`
  return (
    <div className={className}>
      <label
        className={ meta.active && meta.dirty? "active" : undefined }>
        {label}
      </label>
      { id === 'prepTime' || id === 'cookingMin'
        ? <Cleave
            placeholder={ meta.active ? 'hh:mm': null }
            {...input}
            options={{
              time: true,
              timePattern: ['h', 'm']}}
          />
        : <input
            type={type}
            {...input}
            autoComplete='off'
            className={className}
          />
        }


      <span style={{color: 'red'}}>
        {renderErrors(meta)}
      </span>
    </div>
  )
}

export default renderInput
