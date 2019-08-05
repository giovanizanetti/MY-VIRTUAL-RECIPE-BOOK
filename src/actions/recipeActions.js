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
  DELETE_RECIPE_ERROR,
  PREPARE_RECIPE,
  SELECT_MULTIPLE_RECIPES,
  SELECT_ALL
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
   if(id !== '')
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

export const selectMultipleRecipes = recipesIds => {
  console.log(recipesIds)
  return {
    type: SELECT_MULTIPLE_RECIPES,
    payload: recipesIds
  }
}

export const selectAll = (isSelected) => {
  return {
    type: SELECT_ALL,
    payload: isSelected
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
      "X-RAPIDAPI-KEY": "83996459c0msh61a8a094ff561dap1e0802jsne45570f4a44f",
    },
    params: {
      number: 15,
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
    params: id
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

export const prepareRecipe = () => {
  return {
    type: PREPARE_RECIPE,
  }
}




