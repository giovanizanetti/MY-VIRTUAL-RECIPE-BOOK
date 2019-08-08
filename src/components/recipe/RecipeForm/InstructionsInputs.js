import React from 'react'
import { FieldArray } from 'redux-form'
import  RenderInstructions from '../RecipeCreate/containers/RenderInstructions'

export default () => (
 <FieldArray
   name="analyzedInstructions"
   type='text'
   component={ RenderInstructions }
 />
)
