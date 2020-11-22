import React, { Component } from 'react'
import FormErrors from './FormErrors'
import Style from '../style'

const RenderInput = ({ input, label, meta, type, placeholder, autoFocus }) => {
  const { touched, error, active, dirty, initial } = meta

  const className = `input-field col
    ${type === 'number' ? 's6' : 's12'}
    ${error && touched ? 'wrong' : ''}`
  const { spanError } = Style
  const inputStyle = type === 'search' ? { width: '68vw' } : null

  return (
    <div className={className}>
      <label className={active || dirty || initial ? 'active' : undefined}>
        {label}
        {type === 'search' && <i className='material-icons'>search</i>}
      </label>
      <input
        autoFocus={autoFocus}
        placeholder={active ? placeholder : null}
        type={type}
        {...input}
        autoComplete='off'
        className={className}
        style={inputStyle}
      />
      <span style={spanError}>{FormErrors(meta)}</span>
    </div>
  )
}

export default RenderInput
