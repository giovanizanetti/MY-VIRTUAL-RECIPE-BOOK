import { SELECT_MULTIPLE_RECIPES, DELETE_RECIPE, SELECT_ALL } from '../actions/types'

export default (state=[], action) => {
  switch (action.type) {
    case SELECT_MULTIPLE_RECIPES:
      // console.log(Object.getOwnPropertyNames(action.payload))
      console.log(action.payload)
      const isSelected = state.find(id => Object.keys(id) === Object.keys(action.payload))
      console.log(isSelected)
      return [
        ...state.filter(id => id !== action.payload),
        action.payload
      ]
    case SELECT_ALL:
      // o something
    case DELETE_RECIPE:
      state=[]
    default:
      return state
  }
}


