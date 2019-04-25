import axios from 'axios'
import {
  SELECT_RECIPE,
  CREATE_RECIPE,
  EDIT_RECIPE,
  FETCH_RECIPES_FAILED,
  FETCH_RECIPES_PENDING,
  FETCH_RECIPES_SUCCESS,
  SIGN_IN,
  SIGN_OUT,
  CREATE_RECIPE_ERROR
} from './types'

export const createRecipe = recipe => {
  return (dispatch, getState, { getFirabase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore()
    firestore.collection('recipes').add({
      ...recipe
    }).then(() => {
      dispatch({
        type: CREATE_RECIPE,
        payload: recipe
      })
    }).catch(err => {
      dispatch({
        type: CREATE_RECIPE_ERROR, 
        payload: err
      })
    })
   
  }
}

export const selectRecipe = recipe => {
  return {
    type: SELECT_RECIPE,
    payload: recipe
  }
}

export const editRecipe = id => {
  return {
    type: EDIT_RECIPE,
    payload: id
  }
}

export const fetchRecipes = () => dispatch => {
  dispatch({ 
    type: FETCH_RECIPES_PENDING 
  })
  return axios.get('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?', {
    headers: {
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "8e1196b484mshaee2f822d87a11dp10a1dejsn3533f0b051b3"
    },
    params: {
      number: 20
    }
  })
  .then(data => dispatch({ 
    type: FETCH_RECIPES_SUCCESS,
    payload: data
  }))
  .then(data => console.log(data))
  .catch(error => dispatch({
    type: FETCH_RECIPES_FAILED,
    payload: error
  }))
}

export const signIn = credentials => {
  return {
    type: SIGN_IN,
    payload: credentials
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}