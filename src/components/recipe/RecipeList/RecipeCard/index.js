import React from 'react'
import { Link } from 'react-router-dom'
import CardReveal from './CardReveal'

const RecipeCard = props => {
  const {
    id, image, title, glutenFree, lowFodmap,
    vegetarian, vegan, dairyFree, readyInMinutes,
    selectRecipe, recipes, cookingMinutes
  } = props

  return (
    <div
      className="card small col s12 m6 l3"
      style={{ padding: 5 }}
      key={id}
      onClick={() => { selectRecipe(recipes.find(rec => rec.id === id)) }}
      >
      {/*Later => Use Header component and pass style as prop */}
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={image} alt="recipe" />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{title}</span>
        <Link to={`/recipes/${id}`}></Link>
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
      {/* Later => Create a CardReveal component, maybe this component render a overview component */}

    </div>
  )
}

export default RecipeCard
