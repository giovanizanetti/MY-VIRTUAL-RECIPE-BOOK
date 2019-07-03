import React from 'react'

export const renderField = ({ input, label, type, meta: { touched, error, } }) => (
  <div>
    <div>
      <input {...input} type={type} placeholder={label}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)
