import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from '../actions/types'

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
    case SIGNUP_SUCCESS:
      console.log('signed up')
      return {
        ...state,
        authError: null
      }
    case SIGNUP_ERROR:
      console.log('one error ocurred during the sign up')
      return {
        ...state,
        authError: action.err.message
      }
    default:
      return state
  }
}
