import { SELECT_ALL } from '../actions/types'

export default (state=false, action) => {
  console.log(action.type)
  switch(action.type) {
    case SELECT_ALL:
      return state ===true
    default:
      return state
  }
}
