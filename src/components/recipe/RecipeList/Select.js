import React from 'react'
import { showCheckBoxes } from '../../../actions/checkBox'
import {
  selectAll,
  createRecipe,
  selectRecipe,
} from '../../../actions/recipeActions'
import { connect } from 'react-redux'
import { deleteRecipe } from '../../../actions/recipeActions'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { isNumber } from '../../../myLibrary'

const Select = ({
  showCheckBoxes,
  isActive,
  selectedRecipes,
  deleteRecipe,
  apiRecipes,
  createRecipe,
  history,
}) => {
  const isSpoonacular = isNumber(selectedRecipes[0])

  const handleSave = () => {
    alert(
      `${selectedRecipes.length} ${
        selectedRecipes.length === 1 ? 'recipe' : 'recipes'
      } was added to your recipes. Click Ok to go to 'My Recipes'`
    )
    return selectedRecipes.map((recipeId) => {
      const fullRecipe =
        apiRecipes &&
        apiRecipes.find((r) => r.id.toString() === recipeId.toString())
      return (
        showCheckBoxes() &&
        createRecipe(fullRecipe, history.replace('/myRecipes/'))
      )
    })
  }

  const handleDelete = () => {
    const isConfirmed = window.confirm(
      `You sure do you want to delete ${selectedRecipes.length} ${
        selectedRecipes.length === 1 ? 'recipe' : 'recipes'
      } from your recipes:`
    )
    if (isConfirmed) {
      return (
        showCheckBoxes() &&
        selectedRecipes.map((recipe) => deleteRecipe(recipe.toString()))
      )
    }
    selectRecipe(null)
    console.log(selectedRecipes)
    showCheckBoxes()
  }

  return (
    <div
      style={{ display: 'flex', justifyContent: 'flex-end', margin: '1rem' }}
    >
      {/* <div> */}
      {selectedRecipes.length === 0 && (
        <button
          className='btn-small blue lighten-1'
          onClick={() => showCheckBoxes()}
        >
          Select
        </button>
      )}
      {isActive && selectedRecipes.length > 0 && !isSpoonacular && (
        <button className='btn-small red lighten-1' onClick={handleDelete}>
          Delete
        </button>
      )}
      {isActive && selectedRecipes.length > 0 && isSpoonacular && (
        <button className='btn-small blue' onClick={handleSave}>
          Save
        </button>
      )}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { active } = state.checkBoxes
  return {
    isActive: active,
    selectedRecipes: state.selectedRecipes,
    apiRecipes: state.recipes.recipes,
  }
}

export default compose(
  connect(mapStateToProps, {
    showCheckBoxes,
    deleteRecipe,
    selectAll,
    createRecipe,
    selectRecipe,
  }),
  firestoreConnect([
    {
      collection: 'recipes',
    },
  ])
)(Select)
