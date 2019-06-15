import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setRecipe, selectRecipe } from '../../../actions/recipeActions'
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
//Later => Create a check to check wether the user fetch Recipe from the API
//or from 'MyRecipes'?
// Create fetchMYRecipeById action

  componentDidMount(){
      const id = this.props.match.params.id

      const ONLY_NUMBERS_REGEX = /^[0-9]*$/
      const isSpoonacularRecipeId = ONLY_NUMBERS_REGEX.test(id)

      if(isSpoonacularRecipeId){
        this.props.recipes.recipes

        && this.props.selectRecipe(this.props.recipes.recipes.find(recipe => recipe.id === parseInt(id)))
        // check if we have fetched all recipes already from api
        // (to prevent it from crashing on refresh)
        // Then select the recipe
        // fetchFromApiThenSelect

        // if have all recipes, just select
        // selectRecipe(recipe)
      }

      if(!isSpoonacularRecipeId){
        this.props.firesRecipes
        && this.props.firesRecipes !== undefined
        && this.props.setRecipe(this.props.params.id)
        // check if we have fetched all recipes already from firebase
        // (to prevent it from crashing on refresh)
        // Then select the recipe
        // fetchFromFireStoreThenSelect

        // if have all recipes, just select
        // selectRecipe
      }
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

  console.log(state)
  return {
    recipe: state.selectedRecipe,
    auth: state.firebase.auth,
    recipes: state.recipes,
    auth: state.firebase.auth,
    firesRecipes: state.firestore.ordered.recipes,
  }
  // const id = state.selectedRecipeId

  // if(id === null){
  //   return {
  //     recipe: state.selectedRecipe,
  //     recipes: state.recipes,
  //     auth: state.firebase.auth
  //   }
  // }

  // const ONLY_NUMBERS_REGEX = /^[0-9]*$/
  // const isSpoonacularRecipeId = ONLY_NUMBERS_REGEX.test(id)

  // if(isSpoonacularRecipeId){
  //   return {
  //     recipe: state.recipes.recipes.find(recipe => recipe.id === parseInt(id)),
  //     recipes: state.recipes,
  //     auth: state.firebase.auth
  //   }
  // }

  // if(!isSpoonacularRecipeId){
  //   return {
  //     recipe: state.firestore.data.recipes[id],
  //     recipes: state.recipes,
  //     auth: state.firebase.auth
  //   }
  // }
}

export default connect(mapStateToProps, { setRecipe, selectRecipe })(Recipedetail)
