import React from 'react'

export const renderField = ({ input, label, type, textarea, meta: { touched, error, } }) => {
  const className = `input-field materialize-textarea ${error && touched ? 'wrong' : ''}`
  return (
    <div>
      <div>
        { !textarea
        ? <input {...input} type={type} placeholder={label}/>
        : <textarea
            {...input}
            className={className}
            placeholder={label}
            autoComplete='off'
          />
      }
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  )

}
