import React from 'react'
import Modal from '../../Modal'
import style from './style'
import { isNumber } from '../../../myLibrary'
import { createRecipe, selectRecipe } from '../../../actions/recipeActions'
import { connect } from 'react-redux'

const RecipeFooter = props => {
  const { recipeId, history, recipe, selectRecipe, createRecipe } = props
  const { container, button } = style.recipeFooter
  const buttonClasses ='waves-effect waves-light btn center-align modal-trigger'
  const deleteMessage = 'Are you sure you want to delete this recipe?'
  const saveMessage= `The recipe ${recipe.title.toUpperCase()} was just saved in 'My Recipes' `
  const editMessage = 'This recipe is not in your recipes. Do you want to edit it and save the modified version to your recipes?'
  const IS_SPOONACULAR_ID = isNumber(recipeId)
  const handleEdit = () => history.push(`/recipes/edit/${ recipeId }`)
  const handleCLick = () => {
    selectRecipe(recipe)
    createRecipe(recipe)
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
              className={`${ buttonClasses } blue`}
              recipe={ recipe }
              onClick={ handleCLick }
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

export default connect(null, { createRecipe, selectRecipe }) (RecipeFooter)
