import { ADD_TO_FAVORITES, ADD_TO_FAVORITES_ERROR } from '../actions/types'

const initialState = {
  isPending : false,
  favoriteIds: [],
  error: ''
}

export default(state=initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      console.log(action.payload)
      return state
    case ADD_TO_FAVORITES_ERROR:
      console.log(action.payload)
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}
