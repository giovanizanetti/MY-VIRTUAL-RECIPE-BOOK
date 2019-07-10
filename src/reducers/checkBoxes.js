import { SHOW_CHECKBOXES } from '../actions/types'

const initialState = {
  active: false
}

export default (state=initialState, action) => {
  switch (action.type) {
    case SHOW_CHECKBOXES:
      const isActive = state.active
      return {
        ...state,
        active: isActive === true ? false : true
      }
    default:
      return state
  }

}
