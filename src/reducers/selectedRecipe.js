import {
  SELECT_RECIPE,
  FETCH_RECIPES_BY_ID_SUCCESS,
} from '../actions/types'

export default (state=null, action) => {
  switch (action.type) {
    case SELECT_RECIPE:
      return action.payload
    case FETCH_RECIPES_BY_ID_SUCCESS:
        return action.payload
    default:
      return state
  }
}

