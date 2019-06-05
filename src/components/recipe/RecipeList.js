import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchRecipes, selectRecipe } from '../../actions'
import { Link } from 'react-router-dom'

class RecipeList extends Component {
  componentDidMount = () => {
    this.props.fetchRecipes()
  }


  recipeCardsRender = () => {
    const { recipes } = this.props.recipes
    return this.props.recipes.isPending
      ? (
          <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div>
              <div className="gap-patch">
                <div className="circle"></div>
              </div>
              <div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
        )
      : recipes.map(recipe => (
          <div
            className="card small col s12 m6 l3"
            style={{padding: 5}}
            key={recipe.id}
            onClick={() => {
              this.props.selectRecipe(recipe)
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
  }


  render() {
    return (
      <div className='container'>
        <div className="row col">
          {this.recipeCardsRender()}
        </div>
      </div>
    )
  }
}




const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    selectedRecipe: state.selectedRecipe
  }
}

export default connect(mapStateToProps, { fetchRecipes, selectRecipe })(RecipeList)
