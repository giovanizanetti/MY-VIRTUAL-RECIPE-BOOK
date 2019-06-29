import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecipes, editRecipe, fetchRecipeById } from '../../actions/recipeActions'
import _ from 'lodash'
import RecipeForm from './RecipeForm'
import LoaderSpinner from '../LoaderSpinner'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

//This component make use of a tempate (RecipeForm component)

class RecipeEdit extends Component {
  componentDidMount(){
    const ID = this.props.match.params.id
    !this.props.selectedRecipe && this.props.fetchRecipeById(ID)
  }

  onSubmit = formValues => this.props.editRecipe(this.props.match.params.id, formValues)

  render() {
    console.log(this.props, 'hiiii')
    return (
      !this.props.recipe
      ? <LoaderSpinner />
      : <div>
          <h3>Edit a Recipe</h3>
          <RecipeForm
            onSubmit={this.onSubmit}
            //pick only the the values that I actually change inside the form using pick func from Lodash library.
            initialValues={_.pick(this.props.recipe, 'title', 'preparation time', 'ingredients', 'instructions')}
          />
        </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { firestore, selectedRecipe, firebase} = state
  const { recipes } = firestore.ordered
  const ID = ownProps.match.params.id
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

// export default connect(
//   mapStateToProps,
//   {fetchRecipes, editRecipe, fetchRecipeById}
//   )(RecipeEdit)


  export default compose(
    connect(mapStateToProps, { editRecipe, fetchRecipeById, fetchRecipes }),
    firestoreConnect([{
      collection: 'recipes'
    }])
  )(RecipeEdit)

