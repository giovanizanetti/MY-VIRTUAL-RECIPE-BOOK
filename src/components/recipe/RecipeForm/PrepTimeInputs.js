import React from 'react'
import { Field } from 'redux-form'
import  RenderInput  from './containers/RenderInput'

export default () => (
  <div className="row">
    <Field
      name='cookingMinutes'
      component={ RenderInput }
      label='Cooking Time'
      type='number'
      placeholder='minutes'
    />
    <Field
      name='readyInMinutes'
      component={ RenderInput }
      label='Preparation Time'
      type='number'
      placeholder='minutes'
    />
  </div>
)

