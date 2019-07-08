 import React from 'react'
 import { FieldArray } from 'redux-form'
 import  { renderIngredients } from '../RecipeCreate/containers/renderIngredients'

 export default () => (
  <FieldArray
    name="extendedIngredients"
    type='text'
    component={renderIngredients}
  />
 )
