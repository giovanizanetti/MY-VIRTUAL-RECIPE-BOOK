import { CHANGE_SEARCH_FIELD } from './types'

export const setSearchField = query => ({
  type: CHANGE_SEARCH_FIELD,
  payload: query
})
