import {
  FETCH_RECIPES_FAILED,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_PENDING
} from '../actions/types'

const initialState = {
  isPending : false,
  recipes: [],
  error: ''
}

export default (state=initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPES_PENDING:
      return {
        ...state,
        isPending: true
      }
    case FETCH_RECIPES_SUCCESS:
    console.log('success', action.payload)
      return {
        ...state,
        recipes: action.payload.data.recipes,
        isPending: false
      }
    case FETCH_RECIPES_FAILED:
    console.log('failed', action.payload)
      return {
        ...state,
        error: action.payload,
        isPending: false
      }      
  
    default:
      return state
  }
}