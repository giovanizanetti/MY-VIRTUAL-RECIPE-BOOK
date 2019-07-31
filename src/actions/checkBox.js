import { SHOW_CHECKBOXES, CHECK_ALL } from './types'

export const showCheckBoxes = () => {
  return {
    type: SHOW_CHECKBOXES
  }
}

export const checkAll = () => {
  return {
    type: CHECK_ALL
  }
}
