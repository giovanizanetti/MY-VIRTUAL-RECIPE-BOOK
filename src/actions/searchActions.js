import { CHANGE_SEARCH_FIELD } from './types'

export const setSearchField = query => {
  return {
  type: CHANGE_SEARCH_FIELD,
  payload: query
  }
}
