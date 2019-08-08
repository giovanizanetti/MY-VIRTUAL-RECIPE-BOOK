import React from 'react'
import { FieldArray } from 'redux-form'
import RenderOccasions from '../RecipeCreate/containers/RenderOccasions'

export default () => (
 <FieldArray
   name="occasions"
   type='text'
   component={ RenderOccasions }
 />
)
