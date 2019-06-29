import React from 'react'

const AddToFavorite = ({ createCategory, addToFavorites, id }) => {
  console.log(id)
  return (
    <div
      onSubmit={() => addToFavorites(id)}
      className="favorite">
      <a
        className="btn-floating btn-large waves-effect waves-light pink right"
        style={{margin: '1rem'}}
      >
        <i className="material-icons">add</i>
      </a>
      <p className='tooltip'>Add to favorite list</p>
    </div>
  )
}

export default AddToFavorite
