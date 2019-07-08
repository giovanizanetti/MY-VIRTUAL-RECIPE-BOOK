import React from 'react'
import { FieldArray } from 'redux-form'
import  { renderInstructions } from '../RecipeCreate/containers/renderInstructions'

export default () => (
 <FieldArray
   name="analyzedInstructions"
   type='text'
   component={renderInstructions}
 />
)
