import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import recipes from './recipes'
import selectedRecipe from './selectedRecipe'
import auth from './auth'
import checkBoxes from './checkBoxes'
import search from './search'


export default combineReducers({
  form: formReducer,
  recipes,
  selectedRecipe,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  auth,
  checkBoxes,
  search
})
