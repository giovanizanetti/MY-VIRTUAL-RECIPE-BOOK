import React from 'react'
import { showCheckBoxes } from '../../../actions/checkBox'
import { selectAll, selectMultipleRecipes } from '../../../actions/recipeActions'
import { checkAll } from '../../../actions/checkBox'
import { connect } from 'react-redux'
import selectedRecipes from '../../../reducers/selectedRecipes';
import { deleteRecipe } from '../../../actions/recipeActions'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { isNumber } from '../../../myLibrary'
const Select = ({ showCheckBoxes, isActive,
   selectedAll, selectedRecipes, deleteRecipe }) => {

    const isSpoonacular = isNumber(selectedRecipes[0])

    const handleSave = () => {
      // return isMyRecipeExists > 0
      // ? alert(existMessage)
      // : selectRecipe(recipe)
      // &&
      // createRecipe(recipe)
    }

    const handleDelete = () => {
      alert(`You sure do you want to delete ${selectedRecipes.length} ${selectMultipleRecipes.length === 1 ? 'recipe': 'recipes'} from your recipes:`)
      return selectedRecipes.map(recipe => deleteRecipe(recipe.toString()))
    }

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      {
        !isActive
        && <button
              className="btn-small blue"
              onClick={() => showCheckBoxes() }
              >Select
            </button>
      }
      {
        isActive
        && <button
              className="btn-small blue"
              onClick={() => selectAll(true) }
              >Select All
            </button>
      }
      { selectedRecipes.length > 0
        && !isSpoonacular
        && <button
              className="btn-small red"
              onClick={handleDelete}
              >Delete
            </button>
      }
      { selectedRecipes.length > 0
        && isSpoonacular
        && <button
              className="btn-small blue"
              onClick={handleSave}
            >Save
          </button>
      }
    </div>
  )
}

const mapStateToProps = state => {
  const { active } = state.checkBoxes
  return {
    isActive: active,
    selectedAll: state.selectedAll,
    checkAll: state.checkBoxes.isAllChecked,
    selectedRecipes: state.selectedRecipes,
  }
}

// export default connect( mapStateToProps , { showCheckBoxes, checkAll, deleteRecipe })(Select)

export default compose(
  connect(
    mapStateToProps,
    { showCheckBoxes, checkAll, deleteRecipe, selectAll }
  ),
  firestoreConnect([{
    collection: 'recipes'
  }])
)(Select)
