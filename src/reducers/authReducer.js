import { LOGIN_ERROR, LOGIN_SUCCESS, SIGNOUT_SUCCESS} from '../actions/types'

const initialState = {
  authError: null
}

export default (state=initialState, action) => {
  switch(action.type){
    case LOGIN_ERROR:
      console.log('login failed')
      return {
        ...state,
        authError: 'Login failed! Please enter the correct credentials!'
      }
    case LOGIN_SUCCESS:
      console.log('login success')
      return {
        ...state,
        authError: null
      }
    case SIGNOUT_SUCCESS:
      console.log('signed out')
      return {
        ...state
      }
    default:
      return state
  }
}
