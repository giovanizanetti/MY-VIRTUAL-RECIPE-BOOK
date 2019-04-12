import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchRecipes } from '../../actions'

class RecipeList extends Component {
  componentDidMount = () => {
    this.props.fetchRecipes()
  }

  recipeCardsRender = () => {
    const { recipes } = this.props.recipes.recipes
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
        <div className="card col s12 m6 l3" style={{padding: 5}} key={recipe.id}>
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={recipe.image} alt="recipe" />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{recipe.title}<i className="material-icons right">FLip the Card</i></span>
            <p><a href="#">See the full recipe</a></p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{recipe.title}<i className="material-icons right">close</i></span>
            <span>{`Ready in ${recipe.readyInMinutes} minutes`}</span>
            <p>{recipe.glutenFree ? 'Gluten Free' : ''}</p>
            <p>{recipe.lowFodMap ? 'Low Fod Map' : ''}</p>
            <p>{recipe.vegetarian ? 'Vegetarin' : ''}</p>
            <p>{recipe.vegan ? 'Vegan' : ''}</p>
            <p>{recipe.dairyFree ? 'Dairy Free' : ''}</p>

          </div>
        </div>
      ))
  }
  

  render() {
    console.log(this.props.recipes)
    return (
      <div class='container'>
        <div className="row">
          {this.recipeCardsRender()}
        </div>
      </div>
    )
  }
}




const mapStateToProps = state => {
  console.log(state, 'I am the state')
  return {
    recipes: state
  }
}

export default connect(mapStateToProps, { fetchRecipes })(RecipeList)