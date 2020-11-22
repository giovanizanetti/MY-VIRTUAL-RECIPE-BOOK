import React from 'react'
import Modal from '../../Modal'
import style from './style'
import { isNumber } from '../../../myLibrary'
import {
  selectRecipe,
  addToFavorites,
  createRecipe,
} from '../../../actions/recipeActions'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Favorite from './Favorite'

const RecipeFooter = (props) => {
  console.log(props)
  const { recipeId, history, recipe, myRecipes, addToFavorites } = props
  const { container, button } = style.recipeFooter
  const buttonClasses =
    'waves-effect waves-light btn center-align modal-trigger'
  const deleteMessage = 'Are you sure you want to delete this recipe?'
  const editMessage =
    'This recipe is not in your recipes. Do you want to edit it and save the modified version to your recipes?'
  const IS_SPOONACULAR_ID = isNumber(recipeId)
  const isMyRecipeExists =
    myRecipes &&
    myRecipes.filter((myRecipe) => {
      return myRecipe.title === recipe.title
    }).length
  const buttonSaveClasses = isMyRecipeExists
    ? 'waves-effect waves-light btn center-align blue'
    : `${buttonClasses} blue`
  const saveMessage = `The recipe ${recipe.title.toUpperCase()} was just saved in 'My Recipes'`

  const handleEdit = () => history.push(`/recipes/edit/${recipeId}`)

  const handleFavoriteClick = () => {
    //assign favorite to truthy
    recipe.favorite
      ? addToFavorites({ ...recipe, favorite: false })
      : addToFavorites({ ...recipe, favorite: true })
  }

  return (
    <>
      <hr />
      <div className='container' style={container}>
        {!IS_SPOONACULAR_ID ? (
          <>
            <Modal
              popUp={deleteMessage}
              id={'delete'}
              recipeId={recipeId}
              history={history}
            />
            <button
              data-target='delete'
              style={button}
              className={`${buttonClasses} red`}
              recipe={recipe}
            >
              Delete
            </button>
          </>
        ) : (
          <>
            <Modal
              popUp={saveMessage}
              id={'save'}
              recipeId={recipeId}
              history={history}
            />
            <button
              data-target='save'
              style={button}
              className={`${buttonSaveClasses} blue`}
              recipe={recipe}
              // onClick={() => createRecipe(props.recipe)}
            >
              Save
            </button>
          </>
        )}
        {IS_SPOONACULAR_ID && (
          <Modal
            history={history}
            recipeId={recipeId}
            popUp={editMessage}
            id={'edit'}
          />
        )}
        <button
          data-target={'edit'}
          style={button}
          className={`${buttonClasses} green`}
          onClick={IS_SPOONACULAR_ID ? () => {} : handleEdit}
        >
          Edit
        </button>
        {!IS_SPOONACULAR_ID && (
          <Favorite
            style={{
              fontSize: '3rem',
              margin: '1rem 1rem 2rem 1rem',
              color: 'darkred',
            }}
            favorite={recipe.favorite && recipe.favorite}
            handleFavoriteClick={handleFavoriteClick}
          />
        )}
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    myRecipes: state.firestore.ordered.recipes,
  }
}

export default compose(
  connect(mapStateToProps, { selectRecipe, addToFavorites, createRecipe }),
  firestoreConnect([
    {
      collection: 'recipes',
    },
  ])
)(RecipeFooter)
