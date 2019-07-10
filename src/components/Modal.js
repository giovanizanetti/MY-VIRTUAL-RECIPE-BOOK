import React, { Component } from 'react'
import M from "materialize-css/dist/js/materialize.min.js"
import SharePlatforms from '../components/recipe/RecipeDetail/SharePlatforms'
import PrintPreferences from '../components/recipe/RecipeDetail/PrintPreferences'
import { fetchRecipeById, deleteRecipe } from '../actions/recipeActions'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Modal extends Component {
  componentDidMount() {
      const options = {
        inDuration: 250,
        outDuration: 250,
        opacity: 0.5,
        dismissible: true,
        startingTop: "8%",
        endingTop: "30%"
      };
    M.Modal.init(this.Modal, options)
  }

  handleDelete = () => {
    const { recipeId, history, deleteRecipe } = this.props
    const REDIRECT = history.replace('/myRecipes')
    /*
      Even though deleteRecipe action creator accepts only one argument,
      seems like javaScript understands when I pass REDIRECT as a
      second argument.
    */
    deleteRecipe(recipeId, REDIRECT)
  }

  handleClick = () => {
    const { history, recipeId, id } = this.props
    id === 'delete'
    ? this.handleDelete()
    : history.push(`/recipes/edit/${ recipeId }`)
  }

  render() {
    const { id, popUp } = this.props
    const renderContent = () => {
      switch (id) {
        case 'delete':
          return <span>{ popUp }</span>
        case 'edit':
          return <span>{ popUp }</span>
        case 'modal3':
          return <PrintPreferences />
        default:
          return <SharePlatforms />
    }
   }
    return (
      <div
        ref={ Modal => { this.Modal = Modal }}
        id={ this.props.id }
        className="modal"
      >
        {/* If I want Bottom Sheet Modal then addbottom-sheet class */}
        <div className="modal-content">
          { renderContent() }
        </div>
        <div className="modal-footer">
          <button href="#" className="modal-close waves-effect waves-red btn-flat">
            Cancel
          </button>
          { this.props.id !== 'modal4'
            ? <button
                onClick={ this.handleClick }
                className="modal-close waves-effect waves-green btn-flat"
                >Yes
              </button>
              : null
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { firestore, selectedRecipe, firebase} = state
  const { recipes } = firestore.ordered
  const ID = ownProps.recipeId
  const ONLY_NUMBERS_REGEX = /^[0-9]*$/
  const IS_SPOONACULAR_ID = ONLY_NUMBERS_REGEX.test(ID)

  /*
    For some reason that I do not understand,
    when I refresh the page recipes/ (from the Api) I have the selected recipe in the reducer,
    however, when I refresh from /myRecipes (from Firestore) I don't have it.
    API ids are numbers only, so I check if the id is from API, if yes I return selected recipe,
    otherwise I get from firestore and assign the recipe property.
   */
  return {
    auth: firebase.auth,
    selectedRecipe,
    recipe: IS_SPOONACULAR_ID === true
      ? selectedRecipe
      : recipes && recipes.find(rec => rec.id === ID),
  }
}

export default compose(
  connect(
    mapStateToProps,
    { fetchRecipeById, deleteRecipe  }
  ),
  firestoreConnect([{
    collection: 'recipes'
  }])
)(Modal)

