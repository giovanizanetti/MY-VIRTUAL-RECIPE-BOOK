import axios from 'axios'
import {
  SELECT_RECIPE,
  CREATE_RECIPE,
  EDIT_RECIPE,
  EDIT_RECIPE_ERROR,
  FETCH_RECIPES_FAILED,
  FETCH_RECIPES_PENDING,
  FETCH_RECIPES_SUCCESS,
  CREATE_RECIPE_ERROR,
  FETCH_RECIPES_BY_ID_SUCCESS,
  FETCH_RECIPES_BY_ID_PENDING,
  FETCH_RECIPES_BY_ID_FAILED,
  DELETE_RECIPE,
  DELETE_RECIPE_ERROR
} from './types'

export const createRecipe = recipe => {
  //delete id from recipes copied from API because Firebase creates a new id for the recipe
  delete recipe.id
  return (dispatch, getState, { getFirebase, getFirestore }) => {
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

export const editRecipe = (id, recipe) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore()
    firestore.collection('recipes').doc(id).update({
      ...recipe
    }).then(() => {
      dispatch({
        type: EDIT_RECIPE,
        payload: recipe
      })
    }).catch(err => {
      dispatch({
        type: EDIT_RECIPE_ERROR,
        payload: err
      })
    })
  }
}

export const deleteRecipe = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore()
    firestore.collection('recipes').doc(id).delete().then(() => {
      dispatch({
        type: DELETE_RECIPE,
      })
    }).catch(err => {
      dispatch({
        type: DELETE_RECIPE_ERROR,
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

//Later: Create babse URL to make the code cleaner
export const fetchRecipes = (searchValues) => dispatch => {
  dispatch({
    type: FETCH_RECIPES_PENDING
  })
  return axios.get('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?', {
    headers: {
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "X-RAPIDAPI-KEY": "0f1f47b39bmsh0e4d2a04bd035cdp1121bejsnf58a226a5005",
    },
    params: {
      number: 25,
      tags: searchValues ? searchValues : 'main course'
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

export const fetchRecipeById = (id) => (dispatch) => {
  dispatch({
    type: FETCH_RECIPES_BY_ID_PENDING
  })

  return axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`, {
    headers: {
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "X-RAPIDAPI-KEY": "0f1f47b39bmsh0e4d2a04bd035cdp1121bejsnf58a226a5005",
    },
    params: { id }
  })
  .then(res => dispatch({
    type: FETCH_RECIPES_BY_ID_SUCCESS,
    payload: res.data
  }))
  .then(data => console.log(data))
  .catch(error => dispatch({
    type: FETCH_RECIPES_BY_ID_FAILED,
    payload: error
  }))
}



