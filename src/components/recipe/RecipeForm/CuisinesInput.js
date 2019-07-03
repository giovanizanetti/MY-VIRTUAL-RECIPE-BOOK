import React from 'react'
import { FieldArray } from 'redux-form'
import  { renderCuisines } from '../RecipeCreate/containers/renderCuisines'

export default () => (
 <FieldArray
    name="cuisines"
    type='text'
    component={renderCuisines}
 />
)
