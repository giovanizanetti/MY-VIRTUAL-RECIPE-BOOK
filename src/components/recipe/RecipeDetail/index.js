import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import {
  fetchRecipeById,
  selectRecipe,
  createRecipe,
} from '../../../actions/recipeActions'
import { setSearchField } from '../../../actions/searchActions'
import { setImgUrl } from '../../../actions/image'
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
import Style from './style.js'
import PrepareRecipe from './PrepareRecipe'

class Recipedetail extends Component {
  // Fetching Recipe by ID from the API
  componentDidMount() {
    const ID = this.props.match.params.id
    const IS_SPOONACULAR_ID = isNumber(ID)
    const { fetchRecipeById, selectedRecipe, setSearchField } = this.props

    !selectedRecipe &&
      IS_SPOONACULAR_ID &&
      fetchRecipeById(ID) &&
      setSearchField('') &&
      setImgUrl()
  }

  render() {
    const { auth, recipe, match, history } = this.props
    if (!auth.uid) return <Redirect to='/signin' />
    if (!recipe) return <LoaderProgressBar />

    const {
      title,
      image,
      occasions,
      extendedIngredients,
      cuisines,
      cookingMinutes,
      readyInMinutes,
      servings,
      glutenFree,
      vegetarian,
      lowFodmap,
      vegan,
      dairyFree,
      analyzedInstructions,
    } = recipe
    const { card_inner_container } = Style
    return (
      <div className='card'>
        <Header title={title} image={image} />
        <div className='container center' style={card_inner_container}>
          <Cuisines cuisines={cuisines} />
          <Occasions occasions={occasions} />
          <Servings servings={servings} />
        </div>
        <div
          className='container'
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            marginTop: '1rem',
          }}
        >
          <PrepTime
            cookingMinutes={cookingMinutes}
            readyInMinutes={readyInMinutes}
          />
          <PrepareRecipe cookingMinutes={cookingMinutes} />
        </div>
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
          recipeId={match.params.id}
          history={history}
          recipe={recipe}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { firestore, selectedRecipe, firebase } = state
  const { recipes } = firestore.ordered
  const ID = ownProps.match.params.id
  const IS_SPOONACULAR_ID = isNumber(ID)

  return {
    auth: firebase.auth,
    selectedRecipe,
    recipe: IS_SPOONACULAR_ID
      ? selectedRecipe
      : recipes && recipes.find((rec) => rec.id === ID),
  }
}
// To have access to the firestore I must use firestore connect.
export default compose(
  connect(mapStateToProps, {
    selectRecipe,
    fetchRecipeById,
    setSearchField,
    setImgUrl,
    createRecipe,
  }),
  firestoreConnect([
    {
      collection: 'recipes',
    },
  ])
)(Recipedetail)
