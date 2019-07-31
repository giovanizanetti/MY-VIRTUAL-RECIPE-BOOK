import React from 'react'
import { showCheckBoxes } from '../../../actions/checkBox'
import { selectAll } from '../../../actions/recipeActions'
import { checkAll } from '../../../actions/checkBox'
import { connect } from 'react-redux'
import selectedRecipes from '../../../reducers/selectedRecipes';
import { deleteRecipe } from '../../../actions/recipeActions'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'



const Select = ({ showCheckBoxes, isActive,
   selectedAll, selectedRecipes, deleteRecipe }) => {
    console.log(selectedRecipes)

    const handleDelete = () => {
      console.log('click from delete')
      selectedRecipes.map(recipe => deleteRecipe(recipe.toString()))
      // console.log(selectedRecipes.map(recipes => recipes).toString())
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
      { selectedRecipes.length > 0
       && <button
            className="btn-small red"
            onClick={handleDelete}
            >Delete
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
    recipes: state.firestore.data.recipes
  }
}

// export default connect( mapStateToProps , { showCheckBoxes, checkAll, deleteRecipe })(Select)

export default compose(
  connect(
    mapStateToProps,
    { showCheckBoxes, checkAll, deleteRecipe }
  ),
  firestoreConnect([{
    collection: 'recipes'
  }])
)(Select)
