import { CHANGE_SEARCH_FIELD } from '../actions/types'

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
    default:
      return state
  }
}
