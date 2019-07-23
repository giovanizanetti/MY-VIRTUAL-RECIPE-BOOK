import { PREPARE_RECIPE } from '../actions/types'

const initialState = {
  active: false
}

export default (state=initialState, action) => {
  switch (action.type) {
    case PREPARE_RECIPE:
    const isActive = state.active
      return {
        ...state,
        active: !isActive
      }
    default:
      return state
  }

}
