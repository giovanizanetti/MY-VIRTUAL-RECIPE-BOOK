import {
  SET_IMG_URL,
  CREATE_RECIPE
} from '../actions/types'
import Placeholder from '../images/placeholder.jpg'

const initialState = {
  url: Placeholder
}

export default (state=initialState, action) => {
  switch (action.type) {
    case SET_IMG_URL:
      return {
        url: action.payload
      }
    case CREATE_RECIPE:
      return state
    default:
      return state
  }
}
