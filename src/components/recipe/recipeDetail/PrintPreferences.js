import React from 'react'

const PrintPreferences = () => {
  return (
    <div class="container">
      <h6>Select your preference</h6>
      <p>
        <label>
          <input name="group1" type="radio" checked class="with-gap"/>
          <span>Full Recipe</span>
        </label>
      </p>
      <p>
        <label>
          <input name="group1" type="radio" class="with-gap" />
          <span>Ingredient List</span>
        </label>
      </p>
    </div>
  )
}

export default PrintPreferences
