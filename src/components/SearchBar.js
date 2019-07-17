import React from 'react'

const SearchBar = () => {
  return (
    <div className="input-field">
      <input id="search" type="search" required/>
      <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
      <i className="material-icons">close</i>
    </div>
  )
}

export default SearchBar
