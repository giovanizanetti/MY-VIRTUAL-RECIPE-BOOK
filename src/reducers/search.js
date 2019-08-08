import {
  CHANGE_SEARCH_FIELD,
  CREATE_RECIPE
} from '../actions/types'

const initialState = {
  searchField: ''
}

export default (state=initialState, action) => {
  switch(action.type){
    case CHANGE_SEARCH_FIELD:
      return {
        ...state,
        searchField: action.payload
      }
    case CREATE_RECIPE:
      return {
        ...state,
        searchField: ''
      }
    default:
      return state
  }
}
