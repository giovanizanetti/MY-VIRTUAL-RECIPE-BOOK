import React from 'react'
import Modal from '../../Modal'
import style from './style'
import { isNumber } from '../../../myLibrary'

const RecipeFooter = props => {
  const { recipeId, history, recipe } = props
  const { container, button } = style.recipeFooter
  const buttonClasses ='waves-effect waves-light btn center-align modal-trigger'
  const deleteMessage = 'Are you sure you want to delete this recipe?'
  const editMessage =
    'This recipe is not in your recipes. Do you want to edit it and save the modified version to your recipes?'
  const IS_SPOONACULAR_ID = isNumber(recipeId)
  const handleEdit = () => history.push(`/recipes/edit/${ recipeId }`)

  return (
    <>
      <hr />
      <div
        className='container'
        style={ container }
      >
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

export default (RecipeFooter)
