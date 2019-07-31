import React from 'react'

const MyRecipesSearchBar = ({ handleSearch }) => {

  return (
    <div className="input-field nav-wrapper">
      <div className="container">
      <input
        onChange={ handleSearch }
        id="search"
        type="search"
        placeholder='search for recipe name'
      />
      </div>
      <label
        className="label-icon"
        htmlFor="search">
          <i className="material-icons">search</i>
      </label>
    </div>
  )
}

export default MyRecipesSearchBar
