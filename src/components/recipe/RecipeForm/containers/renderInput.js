import React from 'react'
import { renderErrors } from './formErrors'

export const renderInput = ({ input, label, meta, id , type, dirty}) => {
  const className = `input-field col ${id === 'prepTime' || id === 'cookingMin' ? 's8': 's12'}${meta.error && meta.touched ? 'wrong' : ''}`
  return (
    <div className={className}>
      <label
        className={meta.active || meta.touched && dirty ? "active" : undefined}>{label}</label>
      <input
        type={type}
        {...input}
        // autoComplete='off'
        className={className}/>
      <span style={{color: 'red'}}>
        {renderErrors(meta)}
      </span>
    </div>
  )
}

export default renderInput
