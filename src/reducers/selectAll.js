import { SELECT_ALL, } from '../actions/types'

export default (state=false, action) => {
  switch(action.type) {
    case SELECT_ALL:
      //Not workking ???
    console.log(action.payload)
      return action.payload
    default:
      return state
  }
}
