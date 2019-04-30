import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import recipesReducer from './recipesReducer'
import selectedRecipeReducer from './selectedRecipeReducer'
import authReducer from './authReducer'


export default combineReducers({
  form: formReducer,
  recipes: recipesReducer,
  selectedRecipe: selectedRecipeReducer,
  firestore: firestoreReducer,
  firabase: firebaseReducer,
  auth: authReducer
})