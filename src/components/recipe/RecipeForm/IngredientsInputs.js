 import React from 'react'
 import { FieldArray } from 'redux-form'
 import  RenderIngredients from '../RecipeCreate/containers/RenderIngredients'

 export default () => (
  <FieldArray
    name="extendedIngredients"
    type='text'
    component={ RenderIngredients }
  />
 )
