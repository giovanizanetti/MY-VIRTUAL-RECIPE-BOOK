import {
  SELECT_MULTIPLE_RECIPES,
  DELETE_RECIPE, SELECT_ALL,
  UNSELECT,
  CREATE_RECIPE
} from '../actions/types'

export default (state=[], action) => {
  switch (action.type) {
    case SELECT_MULTIPLE_RECIPES:
      return [
        ...state,
        action.payload
      ]
    case DELETE_RECIPE:
      state=[]
    case UNSELECT:
      return state.filter(recipe => recipe !== action.payload)
    default:
      return state
  }
}


