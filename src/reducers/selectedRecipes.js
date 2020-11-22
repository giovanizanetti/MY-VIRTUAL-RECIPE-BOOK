import {
  SELECT_MULTIPLE_RECIPES,
  DELETE_RECIPE,
  UNSELECT,
  UNSELECT_ALL,
} from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case SELECT_MULTIPLE_RECIPES:
      return [...state, action.payload]
    case DELETE_RECIPE:
      return (state = [])
    case UNSELECT:
      return state.filter((recipe) => recipe !== action.payload)
    case UNSELECT_ALL: {
      return (state = [])
    }
    default:
      return state
  }
}
