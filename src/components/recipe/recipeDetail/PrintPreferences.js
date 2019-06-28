import React from 'react'

const PrintPreferences = () => {
  return (
    <>
      <h6>Select your preference</h6>
      <p>
        <label>
          <input name="group1" type="radio" checked className="with-gap"/>
          <span>Full Recipe</span>
        </label>
      </p>
      <p>
        <label>
          <input name="group1" type="radio" class="with-gap" />
          <span>Ingredient List</span>
        </label>
      </p>
    </>
  )
}

export default PrintPreferences
