import React from 'react'

const PrintPreferences = () => {
  return (
    <>
      <h6>Select your preference</h6>
      <p>
        <label>
          <input name="group1" type="radio" defaultChecked className="with-gap"/>
          <span>Full Recipe</span>
        </label>
      </p>
      <p>
        <label>
          <input name="group1" type="radio" className="with-gap" />
          <span>Ingredient List</span>
        </label>
      </p>
    </>
  )
}

export default PrintPreferences
