import React from 'react'

export const renderErrors = ({ error, touched }) => {
  if(touched && error) {
    return (
      <div data-error="wrong">
        <div className='header'>{error}</div>
      </div>
    )
  }
}


export const validate = formValues => {
  const errors = {}
  if(!formValues.title) {
    errors.title = 'You must enter a title'
  }
  return errors
}
