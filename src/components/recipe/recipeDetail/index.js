import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecipeById, selectRecipe } from '../../../actions/recipeActions'
import { Redirect } from 'react-router-dom'
import Occasions from './Occasions'
import Ingredients from './Ingredients'
import PrepTime from './PrepTime'
import AllergensInfo from './AllergensInfo'
import Servings from './Servings'
import Header from './header'
import Instructions from './Instructions'
import LoaderSpinner from '../../LoaderSpinner'

class Recipedetail extends Component {

// Attempt to create a check to verify whether the recipe/recipes
// comes from the API or from the Firestore
  componentDidMount(){
    const ID = this.props.match.params.id
    const FIRESTORE = this.props.firestoreRecipes.data.recipes
    const ONLY_NUMBERS_REGEX = /^[0-9]*$/
    const SPOONACULAR_ID = ONLY_NUMBERS_REGEX.test(ID)

    // It works for the API, however, I am making another call to the API,
    // I believe there is a better way to do that, just need to figure out how!!
    // When I refresh the page the recipes from the state go disappear!!
    // So that is why I am making another call to the API "fetchRecipeById(ID)"
    // instead of grabbing the recipe from the recipes reducer
    if(this.props.recipe === null && SPOONACULAR_ID && this.props.fetchRecipeById(ID))
      return this.props.selectRecipe(ID)

    //  When I try to get Firestore Recipes, it gives me an error!! That is sucks!!
    //  I will check Firestore docs to verify if
    //  I'll need an action creator to fetch those recipes
    if (this.props.recipe === null) return this.props.selectRecipe(FIRESTORE[ID])
  }

  render() {
    console.log(this.props)
    const { recipe, auth } = this.props
    if(!recipe) return <LoaderSpinner />
    if(!auth.uid) {
      console.log(this.props)
      return <Redirect to='/signin' />
    }

    // Seems like the data does not come from the same place from the API,
    // Using || operator was a way that I could fix it.
    const {
      title, image, occasions, extendedIngredients,
      cookingMinutes, readyInMinutes, servings, glutenFree,
      vegetarian, lowFodmap, vegan, dairyFree, analyzedInstructions
    } = this.props.recipe.data || this.props.recipe

    return (
      <div className='container'>
        <div className='card'>
          <Header title={title} image={image} />
          <Occasions occasions={occasions} />
          <PrepTime
            cookingMinutes={cookingMinutes}
            readyInMinutes={readyInMinutes}
          />
          <Ingredients ingredients={extendedIngredients} />
          <Instructions instructions={analyzedInstructions} />
          <AllergensInfo
            isGlutenFree={glutenFree}
            isLowFodmap={lowFodmap}
            isVegetarian={vegetarian}
            isVegan={vegan}
            isDairyFree={dairyFree}
          />
          <Servings servings={servings}/>
          <div>
            <button>Save Recipe</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipe: state.selectedRecipe,
    recipes: state.recipes,
    firestoreRecipes: state.firestore ,
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps, { fetchRecipeById, selectRecipe })(Recipedetail)
