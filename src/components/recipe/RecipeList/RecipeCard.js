import React from 'react'
import { Link } from 'react-router-dom'


const RecipeCard = props => {
  const {
    id, image, title, glutenFree, lowFodmap,
    vegetarian, vegan, dairyFree, readyInMinutes,
    selectRecipe, recipes
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

      {/* Later => Create a CardReveal component, maybe this component rener a overview component */}
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">{title}<i className="material-icons right">close</i></span>
        <span>{`Ready in ${readyInMinutes} minutes`}</span>
        <p>{glutenFree ? 'Gluten Free' : ''}</p>
        <p>{lowFodmap ? 'Low Fod Map' : ''}</p>
        <p>{vegetarian ? 'Vegetarian' : ''}</p>
        <p>{vegan ? 'Vegan' : ''}</p>
        <p>{dairyFree ? 'Dairy Free' : ''}</p>
        <Link to={`/recipes/${id}`}>See the full recipe</Link>
      </div>
    </div>
  )
}

export default RecipeCard
