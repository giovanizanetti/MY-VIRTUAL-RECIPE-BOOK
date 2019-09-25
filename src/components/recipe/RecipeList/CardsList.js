import React from 'react'
import RecipeCard from './RecipeCard/'

const CardsList = ({ recipes, isFavorites }) => {
  return isFavorites && recipes.length < 1 
  ? <span className='red-text'>You haven't added any recipes as favorite just yet</span> :
   recipes && recipes.sort((a, b) => {
    const textA = a.title.toUpperCase()
    const textB = b.title.toUpperCase()
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
  }).map((recipe, i) => {
    const {
      id, image, title, glutenFree, lowFodmap,
      vegetarian, vegan, dairyFree, readyInMinutes,
      cookingMinutes, favorite
    } = recipe
    return(
      <RecipeCard
        key={ i }
        recipes={ recipes }
        id={ id} 
        image={ image }
        title={ title }
        glutenFree={ glutenFree }
        lowFodmap={ lowFodmap }
        vegetarian={ vegetarian }
        vegan={ vegan}
        dairyFree={ dairyFree }
        readyInMinutes={ readyInMinutes }
        cookingMinutes={ cookingMinutes }
        favorite={ favorite }
      />
    )
  })
}

export default CardsList
