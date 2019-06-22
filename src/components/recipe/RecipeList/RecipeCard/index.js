import React from 'react'
import { Link } from 'react-router-dom'
import CardReveal from './CardReveal'

const RecipeCard = props => {
  const {
    id, image, title, glutenFree, lowFodmap,
    vegetarian, vegan, dairyFree, readyInMinutes,
    selectRecipe, recipes, cookingMinutes
  } = props

  const trimString = (string, length) => {
    return string.length > length
      ? string.substring(0, length -3) + "..."
      : string
  }

  return (
    <div
      className="card small col s12 m6 l4"
      style={{ padding: 15 }}
      key={id}
      onClick={() => { selectRecipe(recipes.find(rec => rec.id === id)) }}
      >
      {/*Later => Use Header component and pass style as prop.
      Make use of default props in Header component */}
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={image} alt={title} />
      </div>
      <div className="card-content">
      <span class="card-title activator grey-text text-darken-4">
        { trimString(title, 40) }
      </span>
        {/* <span className="card-title activator grey-text text-darken-4">Flip</span>
        <Link to={`/recipes/${id}`}></Link> */}
      </div>
      <CardReveal
        title={title}
        id={id}
        isGlutenFree={glutenFree}
        isLowFOdmap={lowFodmap}
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
