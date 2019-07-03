import React from 'react'
import { Field } from 'redux-form'
import { renderInput } from './containers/renderInput'

export default () => (
  <div className="row">
    <Field
      name='cookingMinutes'
      component={renderInput}
      type='number'
      label='Cooking Time'
      id='cookingMin'
    />
    <Field
      name='preparationTime'
      component={renderInput}
      type='number'
      label='Preparation Time'
      id='prepTime'
    />
  </div>
)

