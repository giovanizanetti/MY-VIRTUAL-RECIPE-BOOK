import React from 'react'

export const renderTextarea = ({ input, label, meta }) => {
  const className = `input-field materialize-textarea ${meta.error && meta.touched ? 'wrong' : ''}`
  return (
    <div className={className}>
      <label>{label}</label>
      <textarea
        {...input}
        className={className}
        autoComplete='off'
      />
      <span style={{color: 'red'}}>
        {this.renderError(meta)}
      </span>
    </div>
  )
}
