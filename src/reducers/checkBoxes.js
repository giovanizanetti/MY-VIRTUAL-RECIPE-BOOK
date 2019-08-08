import {
  PREPARE_RECIPE,
  SHOW_CHECKBOXES,
  DELETE_RECIPE,
  CREATE_RECIPE,
  SELECT_ALL
} from '../actions/types'

const initialState = {
  active: false,
  isAllChecked: false
}

export default (state=initialState, action) => {
  const isActive = state.active
  switch (action.type) {
    case PREPARE_RECIPE:
      return {
        ...state,
        active: !isActive
      }
    case SHOW_CHECKBOXES:
      return {
        ...state,
        active: !isActive
      }
    case SELECT_ALL:
      return {
        ...state,
        isAllChecked: false
      }
    case DELETE_RECIPE:
        return {
          ...state,
          active: false
        }
    case CREATE_RECIPE:
      return {
        ...state,
        active: false
      }
    default:
      return state
  }

}
