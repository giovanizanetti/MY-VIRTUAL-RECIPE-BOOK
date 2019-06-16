import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import recipes from './recipes'
import selectedRecipe from './selectedRecipe'
import selectedRecipeId from './selectedRecipeId'
import auth from './auth'


export default combineReducers({
  form: formReducer,
  recipes,
  selectedRecipe,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  auth,
  selectedRecipeId,
})
