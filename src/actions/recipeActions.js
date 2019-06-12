import axios from 'axios'
import {
  SELECT_RECIPE,
  CREATE_RECIPE,
  EDIT_RECIPE,
  FETCH_RECIPES_FAILED,
  FETCH_RECIPES_PENDING,
  FETCH_RECIPES_SUCCESS,
  CREATE_RECIPE_ERROR,
  FETCH_RECIPES_BY_ID_SUCCESS
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

//NOT WORKING

export const fetchRecipes = () => dispatch => {
  dispatch({
    type: FETCH_RECIPES_PENDING
  })
  return axios.get('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?', {
    headers: {
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      // "X-RAPIDAPI-KEY": "83996459c0msh61a8a094ff561dap1e0802jsne45570f4a44f",
      // "X-RapidAPI-Key": "8e1196b484mshaee2f822d87a11dp10a1dejsn3533f0b051b3",
      "X-RAPIDAPI-KEY": "0f1f47b39bmsh0e4d2a04bd035cdp1121bejsnf58a226a5005",
    },
    params: {
      number: 100
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

export const fetchRecipeById = id => dispatch => {
  dispatch({
    type: FETCH_RECIPES_PENDING
  })
  return axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}`, {
    headers: {
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      // "X-RAPIDAPI-KEY": "83996459c0msh61a8a094ff561dap1e0802jsne45570f4a44f",
      // "X-RapidAPI-Key": "8e1196b484mshaee2f822d87a11dp10a1dejsn3533f0b051b3",
      "X-RAPIDAPI-KEY": "0f1f47b39bmsh0e4d2a04bd035cdp1121bejsnf58a226a5005",
    },
  })
  .then(data => dispatch({
    type: FETCH_RECIPES_BY_ID_SUCCESS,
    payload: data
  }))
  .then(data => console.log(data))
  .catch(error => dispatch({
    type: FETCH_RECIPES_FAILED,
    payload: error
  }))
}

