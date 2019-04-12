import { SELECT_RECIPE } from '../actions/types'

export default (state=null, action) => {
  switch (action.type) {
    case SELECT_RECIPE:
      return action.payload
    default:
      return state
  }
}