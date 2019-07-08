import React from 'react'
import style from './style'
const AddToFavorite = ({ createCategory, addToFavorites, id }) => {
  const { link } = style.addTofavorite
  return (
    <div
      onSubmit={() => addToFavorites(id)}
      className="favorite">
      <a
        className="btn-floating btn-large waves-effect waves-light pink right"
        style={ link }
      >
        <i className="material-icons">add</i>
      </a>
      <p className='tooltip'>Add to favorite list</p>
    </div>
  )
}

export default AddToFavorite
