import {
  FETCH_RECIPES_FAILED,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_PENDING,
  CREATE_RECIPE,
  CREATE_RECIPE_ERROR
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
      return {
        ...state,
        recipes: action.payload.data.recipes,
        isPending: false
      }
    case FETCH_RECIPES_FAILED:
      return {
        ...state,
        error: action.payload,
        isPending: false
      }
    case CREATE_RECIPE:
      return state
    case CREATE_RECIPE_ERROR:
      return state
    default:
      return state
  }
}
