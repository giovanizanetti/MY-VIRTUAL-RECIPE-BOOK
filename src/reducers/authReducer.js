import { LOGIN_ERROR, LOGIN_SUCCESS} from '../actions/types'

const initialState = {
  authError: null
}

export default (state=initialState, action) => {
  switch(action.type){
    case LOGIN_ERROR:
      console.log('login failed')
      return {
        ...state,
        authError: 'Login failed'
      }
    case LOGIN_SUCCESS:
      console.log('login success')
      return {
        ...state,
        authError: null
      }
    default:
      return state
  }
}
