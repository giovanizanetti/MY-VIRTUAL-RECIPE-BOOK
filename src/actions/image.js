import { SET_IMG_URL } from './types'

export const setImgUrl = (url) => {
  return {
    type: SET_IMG_URL,
    payload: url
  }
}
