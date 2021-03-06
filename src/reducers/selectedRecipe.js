import {
  SELECT_RECIPE,
  FETCH_RECIPES_BY_ID_SUCCESS,
  DELETE_RECIPE,
  FETCH_RECIPES_PENDING,
  CREATE_RECIPE
} from '../actions/types'

export default (state=null, action) => {
  switch (action.type) {
    case SELECT_RECIPE:
      return action.payload
    case FETCH_RECIPES_BY_ID_SUCCESS:
        return action.payload
    case DELETE_RECIPE:
      return state=null
    case FETCH_RECIPES_PENDING:
      return state=null
    case CREATE_RECIPE:
      return state=null
    default:
      return state
  }
}

