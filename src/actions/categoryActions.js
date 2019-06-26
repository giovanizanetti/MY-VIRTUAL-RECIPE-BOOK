import {
  CREATE_CATEGORY,
  CREATE_CATEGORY_ERROR,
  ADD_TO_FAVORITES,
  ADD_TO_FAVORITES_ERROR
 } from './types'
import { actionTypes } from 'redux-firestore';

export const createCategory = category => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore()
    firestore.collection('categories').add({
      ...category
    }).then(() => {
      dispatch({
        type: CREATE_CATEGORY,
        payload: category
      })
    }).catch(err => {
      dispatch({
        type: CREATE_CATEGORY_ERROR,
        payload: err
      })
    })
  }
}

export const addToFavorites = (recipeId, category) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore()
    firestore.collection('categories').add({
      recipeId
    }).then(() => {
      dispatch({
        type: ADD_TO_FAVORITES,
        payload: recipeId
      }).catch(err => {
        dispatch({
          type: ADD_TO_FAVORITES_ERROR,
          payload: err
        })
      }

      )

    })
  }
}
