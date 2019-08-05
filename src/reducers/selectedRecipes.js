import {
  SELECT_MULTIPLE_RECIPES,
  DELETE_RECIPE, SELECT_ALL,
  UNSELECT
} from '../actions/types'

export default (state=[], action) => {
  switch (action.type) {
    case SELECT_MULTIPLE_RECIPES:
      return [
        // ...state.filter(id => id !== action.payload),
        ...state,
        action.payload
      ]
    case SELECT_ALL:
      // o something
    case DELETE_RECIPE:
      state=[]
    case UNSELECT:
      return state.filter(recipe => recipe !== action.payload)
    default:
      return state
  }
}


