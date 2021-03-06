import React, { Component } from 'react'
import M from "materialize-css/dist/js/materialize.min.js"
import PrintPreferences from '../components/recipe/RecipeDetail/PrintPreferences'
import { fetchRecipeById, deleteRecipe, createRecipe } from '../actions/recipeActions'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { isNumber } from '../myLibrary'
import { Link } from 'react-router-dom'

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
    switch (id) {
      case 'delete':
        return this.handleDelete()
      case 'edit':
        return history.push(`/recipes/edit/${ recipeId }`)
      default:
        return
    }
  }

  render() {
    const { id, popUp, createRecipe, recipe } = this.props
    const renderContent = () => {
      switch (id) {
        case 'print':
          return <PrintPreferences />
        default:
          return <span>{ popUp }</span>
    }
   }
    return (
      <div
        ref={ Modal => { this.Modal = Modal }}
        id={ id }
        className="modal"
      >
        <div className="modal-content">
          { renderContent() }
        </div>
        <div className="modal-footer">
          <button
            href="#"
            className="modal-close waves-effect waves-red btn-flat"
          >
            { id !== 'save' ? 'cancel' : null }
          </button>
          { id !== 'share' && id !== 'save'
            ? <button
                onClick={ this.handleClick }
                className="modal-close waves-effect waves-green btn-flat"
                >Yes
              </button>
              : null
          }
          { id === 'save' &&
            <Link
              to='/myRecipes/'
              className="modal-close waves-effect waves-green btn-flat"
              onClick={() => createRecipe(recipe)}
              >Go to My Recipes
            </Link>
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
  const IS_SPOONACULAR_ID = isNumber(ID)

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
    { fetchRecipeById, deleteRecipe, createRecipe  }
  ),
  firestoreConnect([{
    collection: 'recipes'
  }])
)(Modal)

