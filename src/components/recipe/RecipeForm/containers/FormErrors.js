import React from 'react'

const FormErrors = ({ error, touched }) => {
  if(touched && error) {
    return (
      <div data-error="wrong">
        <div className='header'>{error}</div>
      </div>
    )
  }
}

const validate = formValues => {
  const errors = {}
  if(!formValues.title) {
    errors.title = 'You must enter a title'
  }
  if (!formValues.readyInMinutes) {
    errors.age = 'Please an estimation of preparation time is required'
  } else if (isNaN(Number(formValues.readyInMinutes))
    || isNaN(Number(formValues.cookingMinutes))) {
    errors.age = 'time formate must be numbers'
  }
  return errors
}

export {
  validate,
  FormErrors as default
}
