import { 
    SET_CURRENT_PAGE,
    SET_RECIPES_PER_PAGE
 } from './types'

export const setCurrentPage = (page) => {
    return {
      type: SET_CURRENT_PAGE,
      payload: page
    }
}

export const setRecipesPerPage = (recipeNumber) => {
    return {
        type: SET_RECIPES_PER_PAGE,
        payload: recipeNumber
    }
}