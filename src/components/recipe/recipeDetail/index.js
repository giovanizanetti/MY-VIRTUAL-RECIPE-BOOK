import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { fetchRecipeById, selectRecipe } from '../../../actions/recipeActions'
import { isNumber } from '../../../myLibrary'
import { Redirect } from 'react-router-dom'
import Occasions from './Occasions'
import Ingredients from './Ingredients'
import PrepTime from './PrepTime'
import AllergensInfo from './AllergensInfo'
import Servings from './Servings'
import Header from './header'
import Instructions from './Instructions'
import LoaderProgressBar from '../../LoaderProgressBar'
import RecipeFooter from './RecipeFooter'
import Cuisines from './Cuisines'
import style from './style.js'

class Recipedetail extends Component {
  // Fetching Recipe by ID from the API
  componentDidMount(){
    const ID = this.props.match.params.id
    const IS_SPOONACULAR_ID = isNumber(ID)
    const { fetchRecipeById, selectedRecipe } = this.props

    !selectedRecipe
    && IS_SPOONACULAR_ID
    && fetchRecipeById(ID)
  }

  render() {
    const { auth, recipe, match, history } = this.props
    if(!auth.uid) return <Redirect to='/signin' />
    if(!recipe) return <LoaderProgressBar />

    const {
      title, image, occasions, extendedIngredients, cuisines,
      cookingMinutes, readyInMinutes, servings, glutenFree,
      vegetarian, lowFodmap, vegan, dairyFree, analyzedInstructions,
    } = recipe

    // Later => Add a button to prepare this recipe
    // when the user push the button an alarm will pop up
    // and the checkboxes will be available so the user can checkout
    // each itengredient/instruction as it go.
    return (
      <div className='card'>
        <Header title={title} image={image} />
        <div
          className="container center"
          style={style.card_inner_container}
        >
          <Cuisines cuisines={cuisines}/>
          <Occasions occasions={occasions} />
          <Servings servings={servings}/>
        </div>
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
        <RecipeFooter
          recipeId={ match.params.id }
          history={ history }
          recipe={ recipe }
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { firestore, selectedRecipe, firebase} = state
  const { recipes } = firestore.ordered
  const ID = ownProps.match.params.id
  const IS_SPOONACULAR_ID = isNumber(ID)

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
    recipe: IS_SPOONACULAR_ID
      ? selectedRecipe
      : recipes && recipes.find(rec => rec.id === ID),
  }
}
 // To have access to the firestore I must use firestore connect.
export default compose(
  connect(
    mapStateToProps,
    { selectRecipe, fetchRecipeById }
  ),
  firestoreConnect([{
    collection: 'recipes'
  }])
)(Recipedetail)

