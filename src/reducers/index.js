import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'
import recipesReducer from './recipesReducer'

export default combineReducers({
  form: formReducer,
  recipes: recipesReducer
})