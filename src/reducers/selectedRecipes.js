import { SELECT_MULTIPLE_RECIPES, DELETE_RECIPE } from '../actions/types'

export default (state=[], action) => {
  switch (action.type) {
    case SELECT_MULTIPLE_RECIPES:
      return [...state, action.payload ]
    case DELETE_RECIPE:
      state=[]
    default:
      return state
  }
}


