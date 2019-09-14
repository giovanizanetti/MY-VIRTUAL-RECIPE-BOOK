import spoonacular from '../config/spooncular'
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
  SELECT_ALL,
  UNSELECT,
} from './types'



export const createRecipe = recipe => {
  recipe.id && delete recipe.id

  return (dispatch, getState, { getFirebase, getFirestore }) => {
    recipe.userId = getState().firebase.auth.uid
    
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

export const unselect = (id) => {
  return {
    type: UNSELECT,
    payload: id
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
  return {
    type: SELECT_MULTIPLE_RECIPES,
    payload: recipesIds
  }
}

export const selectAll = () => {
  return {
    type: SELECT_ALL
  }
}

export const fetchRecipes = (searchValues) => dispatch => {
  dispatch({
    type: FETCH_RECIPES_PENDING
  })
  return spoonacular.get('./random?', {
    params: {
      number: 15,
      tags: searchValues ? searchValues : 'main course'
    }
  })
    .then(data => dispatch({
      type: FETCH_RECIPES_SUCCESS,
      payload: data
    }))
    .catch(error => dispatch({
      type: FETCH_RECIPES_FAILED,
      payload: error
    }))
}

export const fetchRecipeById = (id) => (dispatch) => {
  dispatch({
    type: FETCH_RECIPES_BY_ID_PENDING
  })

  return spoonacular.get(`./${id}/information`)
    .then(res => dispatch({
      type: FETCH_RECIPES_BY_ID_SUCCESS,
      payload: res.data
    }))
    .catch(error => dispatch({
      type: FETCH_RECIPES_BY_ID_FAILED,
      payload: error
    }))
}

export const prepareRecipe = () => {
  return {
    type: PREPARE_RECIPE
  }
}




