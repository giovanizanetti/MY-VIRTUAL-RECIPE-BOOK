import React from 'react'
import { Field } from 'redux-form'
import { renderInput } from './containers/renderInput'

export default () => (
  <div className="row">
    <Field
      name='cookingMinutes'
      component={renderInput}
      label='Cooking Time'
      type='number'
      placeholder='minutes'
    />
    <Field
      name='readyInMinutes'
      component={renderInput}
      label='Preparation Time'
      type='number'
      placeholder='minutes'
    />
  </div>
)

