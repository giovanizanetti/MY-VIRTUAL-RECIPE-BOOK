import React from 'react'
import { Field } from 'redux-form'
import { renderInput } from './containers/renderInput'

export default () => (
  <div className="row">
    <Field
      name='cookingMinutes'
      component={renderInput}
      label='Cooking Time'
      id='cookingMin'
    />
    <Field
      name='readyInMinutes'
      component={renderInput}
      label='Preparation Time'
      id='prepTime'
    />
  </div>
)

