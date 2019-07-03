 import React from 'react'
 import { FieldArray } from 'redux-form'
 import  { renderIngredients } from '../RecipeCreate/containers/renderIngredients'

 export default () => (
  <FieldArray
    name="ingredients"
    type='text'
    component={renderIngredients}
  />
 )
