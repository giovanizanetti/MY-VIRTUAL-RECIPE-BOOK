import React from 'react'
import FormErrors from './FormErrors'
import Style from '../Style'

const RenderInput = ({ input, label, meta, type, placeholder }) => {
  const { touched, error, active, dirty, initial } = meta
  const className =
    `input-field col
    ${ type === 'number'  ? 's6': 's12' }
    ${ error && touched ? 'wrong' : ''}`
    const { spanError } = Style
    const inputStyle = type === 'search' ? { width: '68vw'}: null

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
          style={ inputStyle }
        />
      <span style={ spanError }>
        { FormErrors(meta) }
      </span>
    </div>
  )
}

export default RenderInput
