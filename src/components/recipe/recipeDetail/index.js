import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
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

    // Fetching Recipe by ID from the API
  //   // It works for the, however, I am making another call to the API,
  //   // I believe there is a better way to do that, just need to figure out how!!
  //   // When I refresh the page the recipes from the state go disappear!!
  //   // So that is why I am making another call to the API "fetchRecipeById(ID)"
  //   // instead of grabbing the recipe from the recipes reducer
  componentDidMount(){
    const ID = this.props.match.params.id
    !this.props.selectedRecipe && this.props.fetchRecipeById(ID)
  }

  render() {
    const { auth, recipe } = this.props
    if(!auth.uid) return <Redirect to='/signin' />
    if(!recipe) return <LoaderSpinner />

    // Destructuring and use either properties from the recipes that are caming
    // from firestore 'recipe' or from SpoonacularApi 'recipe.data'.
    // I am making another call for a single recipe, and the
    // api provides single recipe inside data property.
    const {
      title, image, occasions, extendedIngredients,
      cookingMinutes, readyInMinutes, servings, glutenFree,
      vegetarian, lowFodmap, vegan, dairyFree, analyzedInstructions
    } = recipe.data || recipe
    return (
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
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { firestore, selectedRecipe, firebase} = state
  const { recipes } = firestore.ordered
  const ID = ownProps.match.params.id
  const ONLY_NUMBERS_REGEX = /^[0-9]*$/
  const IS_SPOONACULAR_ID = ONLY_NUMBERS_REGEX.test(ID)

  /*
    For some reason that I do not understand,
    when I refresh the page recipes/ (from the Api) I have the selected recipe in the reducer,
    however, when I refresh from /myRecipes (from Firestore) I don't have it.
    API ids are numbers only, so I check if the id is from API, if yes I return selected recipe,
    otherwise I get from firestore and assign the recipe property.
   */
  return {
    auth: firebase.auth,
    selectedRecipe,
    recipe: IS_SPOONACULAR_ID === true
      ? selectedRecipe
      : recipes && recipes.find(rec => rec.id === ID),
  }
}
 // To have access to the firestore I must use firestore connect.
export default compose(
  connect(mapStateToProps, { selectRecipe, fetchRecipeById }),
  firestoreConnect([{
    collection: 'recipes'
  }])
)(Recipedetail)

