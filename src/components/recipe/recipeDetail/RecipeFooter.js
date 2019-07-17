import React from 'react'
import Modal from '../../Modal'
import style from './style'
import { isNumber } from '../../../myLibrary'
import { createRecipe, selectRecipe } from '../../../actions/recipeActions'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'

const RecipeFooter = props => {
  const { recipeId, history, recipe, selectRecipe, createRecipe, myRecipes } = props
  const { container, button } = style.recipeFooter
  const buttonClasses ='waves-effect waves-light btn center-align modal-trigger'
  const deleteMessage = 'Are you sure you want to delete this recipe?'
  const editMessage = 'This recipe is not in your recipes. Do you want to edit it and save the modified version to your recipes?'
  const IS_SPOONACULAR_ID = isNumber(recipeId)
  const isMyRecipeExists = myRecipes && myRecipes.filter(myRecipe => {
    return myRecipe.title === recipe.title
  }).length
  const existMessage = `A recipe ${recipe.title} is already on your recipes, please choose a diferent name`
  const buttonSaveClasses =
    isMyRecipeExists
    ? 'waves-effect waves-light btn center-align blue'
    : `${ buttonClasses } blue`
  const saveMessage = `The recipe ${recipe.title.toUpperCase()} was just saved in 'My Recipes'`


  const handleEdit = () => history.push(`/recipes/edit/${ recipeId }`)
  const handleSave = () => {
    return isMyRecipeExists > 0
    ? alert(existMessage)
    : selectRecipe(recipe)
    && createRecipe(recipe)

    // !isMyRecipeExists &&

    //later -> check if recipe.title matchs any firabase recipe.title
    //If yes, ask for the user if she wants to save as 'recipe title(2)'?
    //give to the user the option to cancel
    // then ...
    // selectRecipe(recipe) &&
    // createRecipe(recipe)
  }

  return (
    <>
      <hr />
      <div
        className='container'
        style={ container }
      >
        { !IS_SPOONACULAR_ID
        ?
          <>
            <Modal
                popUp={ deleteMessage }
                id={ 'delete' }
                recipeId={ recipeId }
                history={ history }
              />
              <button
                data-target="delete"
                style={ button }
                className={`${ buttonClasses } red`}
                recipe={ recipe }
              >
                Delete
              </button>
            </>
        : <>
            <Modal
              popUp={ saveMessage }
              id={'save' }
              recipeId={ recipeId }
              history={ history }
            />
            <button
              data-target="save"
              style={ button }
              className={`${ buttonSaveClasses } blue`}
              recipe={ recipe }
              onClick={ handleSave }
            >
              Save
            </button>
          </>
        }
        {
          IS_SPOONACULAR_ID &&
          <Modal
            history={ history }
            recipeId={ recipeId }
            popUp={ editMessage }
            id={ 'edit' }
          />
        }
        <button
          data-target={"edit"}
          style={ button }
          className={`${ buttonClasses } grey`}
          onClick={ IS_SPOONACULAR_ID ? () => {} : handleEdit }
        >Edit
        </button>

       <Modal id={ 'print' } />
        <button
          data-target="print"
          style={ button }
          className={`${ buttonClasses } green`}
          history={ history }
          onClick={() => console.log(history)}
        >
          Print
        </button>

        <Modal id={ 'share' } />
        <button
          data-target="share"
          style={ button }
          className={`${ buttonClasses } black`}
        >
          <i className="material-icons">share</i>
        </button>
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    myRecipes: state.firestore.ordered.recipes
  }
}


export default compose(
  connect(mapStateToProps, { createRecipe, selectRecipe } ),
  firestoreConnect([{
    collection: 'recipes'
  }])
)(RecipeFooter)
