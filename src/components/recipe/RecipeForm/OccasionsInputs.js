import React from 'react'
import { FieldArray } from 'redux-form'
import  { renderOccasions } from '../RecipeCreate/containers/renderOccasions'

export default () => (
 <FieldArray
   name="occasions"
   type='text'
   component={renderOccasions}
 />
)
