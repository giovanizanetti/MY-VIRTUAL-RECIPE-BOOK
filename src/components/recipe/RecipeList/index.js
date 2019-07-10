import React from 'react'
import CardsList from './CardsList.js'

const RecipeList = (props) => {
  const { recipes }  = props

  return (
    <div className="row col">
      <button
        class="btn blue"
      >
        Select
      </button>
      <CardsList
        recipes={recipes}
      />
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {

  }
}

export default RecipeList








