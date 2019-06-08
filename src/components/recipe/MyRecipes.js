import React from 'react'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import LoaderSpinner from '../LoaderSpinner'
import { selectRecipe } from '../../actions'


const MyRecipes = (props) => {
  const RECIPES = !props.recipes
    ? <LoaderSpinner />
    : props.recipes.map(recipe => (
        <div
          className="card small col s12 m6 l3"
          style={{padding: 5}}
          key={recipe.id}
          onClick={() => {
            props.selectRecipe(recipe)
          }}
          >
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={recipe.image} alt="recipe" />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{recipe.title}<i className="material-icons right">FLip the Card</i></span>
            <Link to={`/recipes/${recipe.id}`}></Link>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{recipe.title}<i className="material-icons right">close</i></span>
            <span>{`Ready in ${recipe.readyInMinutes} minutes`}</span>
            <p>{recipe.glutenFree ? 'Gluten Free' : ''}</p>
            <p>{recipe.lowFodMap ? 'Low Fod Map' : ''}</p>
            <p>{recipe.vegetarian ? 'Vegetarian' : ''}</p>
            <p>{recipe.vegan ? 'Vegan' : ''}</p>
            <p>{recipe.dairyFree ? 'Dairy Free' : ''}</p>
            <Link to={`/recipes/${recipe.id}`}>See the full recipe</Link>
          </div>
        </div>
    ))

    return (
      <div className='container'>
        <div className="row col">
          { RECIPES }
        </div>
      </div>
    )

}

const mapStateToProps = state => {
  return {
    recipes: state.firestore.ordered.recipes
  }
}

export default compose(
  connect(mapStateToProps, { selectRecipe }),
  firestoreConnect([{
    collection: 'recipes'
  }])
)(MyRecipes)
