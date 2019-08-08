import React from 'react'
import { FieldArray } from 'redux-form'
import  RenderCuisines from '../RecipeCreate/containers/RenderCuisines'

export default () => (
 <FieldArray
    name="cuisines"
    type='text'
    component={RenderCuisines}
 />
)
