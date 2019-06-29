import React from 'react'
import Modal from '../../Modal'

const RecipeFooter = props => {
  const style = { margin: '1rem' }
  const buttonClasses ='waves-effect waves-light btn center-align modal-trigger'
  const deleteMessage = 'Are you sure you want to delete this recipe?'
  const editMessage = 'You can not delete this message directly. Do you want to make a copy of it?'
  const ONLY_NUMBERS_REGEX = /^[0-9]*$/
  const IS_SPOONACULAR_ID = ONLY_NUMBERS_REGEX.test(props.recipeId)
  return (
    <>
      <hr />
      <div
        className='container'
        style={{display: 'flex', justifyContent: 'center'}}
      >
        <Modal popUp={deleteMessage} id={ 'modal1' } />
        <button
          data-target="modal1"
          style={style}
          className={`${buttonClasses} red`}
        >
          Delete
        </button>

        { IS_SPOONACULAR_ID && <Modal popUp={editMessage} id={ 'modal2' } /> }
        <button
          data-target={"modal2"}
          style={style}
          className={`${buttonClasses} grey`}
        >Edit
        </button>

       <Modal id={ 'modal3' } />
        <button
          data-target="modal3"
          style={style}
          className={`${buttonClasses} green`}
        >
          Print
        </button>

        <Modal id={ 'modal4' } />
        <button
          data-target="modal4"
          style={style}
          className={`${buttonClasses} black`}
        >
          <i className="material-icons">share</i>
        </button>
      </div>
    </>
  )
}

export default (RecipeFooter)
