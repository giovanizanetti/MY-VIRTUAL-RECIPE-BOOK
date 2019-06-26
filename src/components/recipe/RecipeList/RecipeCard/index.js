import React from 'react'
import CardReveal from './CardReveal'
import { trimString } from '../../../../myLibrary'

const RecipeCard = props => {
  const {
    id, image, title, glutenFree, lowFodmap,
    vegetarian, vegan, dairyFree, readyInMinutes,
    selectRecipe, recipes, cookingMinutes
  } = props

  return (
    <div
      className="card small col s12 m6 l4"
      style={{ padding: 15 }}
      key={id}
      onClick={() => { selectRecipe(recipes.find(rec => rec.id === id)) }}
      >
      {/*Later => Use Header component and pass style as prop.
      Make use of default props in Header component if necessary */}
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={image} alt={title} />
      </div>
      <span className="card-title activator grey-text text-darken-4">
        { trimString(title, 40) }
      </span>
      <CardReveal
        title={title}
        id={id}
        isGlutenFree={glutenFree}
        isLowFodmap={lowFodmap}
        isVegetarian={vegetarian}
        isVegan={vegan}
        isDairyFree={dairyFree}
        readyInMinutes={readyInMinutes}
        cookingMinutes={cookingMinutes}
      />
    </div>
  )
}

export default RecipeCard