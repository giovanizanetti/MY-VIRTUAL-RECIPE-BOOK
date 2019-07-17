import React from 'react'
import { renderErrors } from './formErrors'
import style from '../style'


export const renderInput = ({ input, label, meta, type, placeholder }) => {
  const { touched, error, active, dirty, initial } = meta
  const className =
    `input-field col
    ${ type === 'number'  ? 's6': 's12' }
    ${ error && touched ? 'wrong' : ''}`
    const { spanError } = style

  return (
    <div className={className}>
      <label
        className={ active || dirty || initial? "active" : undefined }>
        {label}
        { type === 'search' && <i className="material-icons">search</i>}
      </label>
        <input
          placeholder={ active ? placeholder: null }
          type={type}
          {...input}
          autoComplete='off'
          className={className}
          style={ type === 'search' && {
            width: '68vw'
          }}
        />
      <span style={ spanError }>
        {renderErrors(meta)}
      </span>
    </div>
  )
}

export default renderInput
