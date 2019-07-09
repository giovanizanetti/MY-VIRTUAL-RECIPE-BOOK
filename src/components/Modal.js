import React, { Component } from 'react'
import M from "materialize-css/dist/js/materialize.min.js"
import SharePlatforms from '../components/recipe/RecipeDetail/SharePlatforms'
import PrintPreferences from '../components/recipe/RecipeDetail/PrintPreferences'
import { deleteRecipe, fetchRecipeById } from '../actions/recipeActions'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { getFirestore } from 'redux-firestore'
import { Redirect } from 'react-router-dom'

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
    getFirestore().collection('recipes')
    .doc(this.props.recipeId).delete()
    .then(this.props.history.replace('/myRecipes'))
    .then(console.log('Your recipe was succefully deleted'))
  }

  handleClick = () => {
    this.props.id === 'delete'
    ? this.handleDelete()
    : this.props.history.push(`/recipes/edit/${this.props.recipeId}`)
  }

  render() {
   const renderContent = () => {
      switch (this.props.id) {
        case 'delete':
          return <span>{ this.props.popUp }</span>
        case 'edit':
          return <span>{ this.props.popUp }</span>
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
          <a href="#" className="modal-close waves-effect waves-red btn-flat">
            Cancel
          </a>
          { this.props.id !== 'modal4'
            ? <a onClick={this.handleClick} className="modal-close waves-effect waves-green btn-flat">Yes</a>
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
    { fetchRecipeById }
  ),
  firestoreConnect([{
    collection: 'recipes'
  }])
)(Modal)

