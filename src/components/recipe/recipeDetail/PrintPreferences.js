import React, { Component } from 'react'

class PrintPreferences extends Component {
  state={
    selectedOption: 'fullRecipe'
  }

  handlePrintOptions = e => {
    this.setState({
      selectedOption: e.target.value
    })
  }
  render(){
    return (
      <>
        <h6>Select your preference</h6>
        <p>
          <label>
            <input
              value='fullRecipe'
              checked={ this.state.selectedOption === 'fullRecipe' }
              type="radio"
              onChange={this.handlePrintOptions}
              className="with-gap"
              />
            <span>Full Recipe</span>
          </label>
        </p>
        <p>
          <label>
            <input
              // name="group1"
              value='IngredientList'
              checked={ this.state.selectedOption === 'IngredientList' }
              type="radio"
              onChange={this.handlePrintOptions}
              className="with-gap"
              />
            <span>Ingredient List</span>
          </label>
        </p>
      </>
    )
  }
}

export default PrintPreferences
