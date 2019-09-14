import {
  FETCH_RECIPES_FAILED,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_PENDING,
  CREATE_RECIPE,
  CREATE_RECIPE_ERROR,
  FETCH_RECIPES_BY_ID_PENDING,
  FETCH_RECIPES_BY_ID_SUCCESS,
  FETCH_RECIPES_BY_ID_FAILED,
  EDIT_RECIPE,
  EDIT_RECIPE_ERROR,
  DELETE_RECIPE,
  DELETE_RECIPE_ERROR,
  SET_CURRENT_PAGE,
} from '../actions/types'

const initialState = {
  isPending : false,
  recipes: [],
  error: '',
  currentPage: 1,
  recipesPerPage: 6
}

export default (state=initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPES_PENDING:
      return {
        ...state,
        isPending: true,
        error: ''
      }
    case FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        recipes: action.payload.data.recipes,
        isPending: false,
        error: ''
      }
    case FETCH_RECIPES_FAILED:
      return {
        ...state,
        error: action.payload,
        isPending: false
      }
    case FETCH_RECIPES_BY_ID_PENDING:
      return {
        ...state,
        isPending: true
      }
    case FETCH_RECIPES_BY_ID_SUCCESS:
      return {
        ...state,
        recipes: action.payload.id,
        isPending: false
      }
    case FETCH_RECIPES_BY_ID_FAILED:
      return {
        ...state,
        error: action.payload,
        isPending: false
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }
    case CREATE_RECIPE:
      return state
    case CREATE_RECIPE_ERROR:
      return state
    case EDIT_RECIPE:
      return {
        ...state,
        [action.payload.id]: action.payload
      }
    case EDIT_RECIPE_ERROR:
      return state
    case DELETE_RECIPE:
      return state
    case DELETE_RECIPE_ERROR:
      return state
    default:
      return state
  }
}
