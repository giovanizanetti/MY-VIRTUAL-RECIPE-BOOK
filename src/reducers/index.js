import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'
import recipesReducer from './recipesReducer'
import selectedRecipeReducer from './selectedRecipeReducer'

export default combineReducers({
  form: formReducer,
  recipes: recipesReducer,
  selectedRecipe: selectedRecipeReducer  
})