import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecipes, editRecipe } from '../../actions'
import _ from 'lodash'
import RecipeForm from './RecipeForm'
import LoaderSpinner from '../LoaderSpinner'

//This component make use of a tempate (RecipeForm component)

class RecipeEdit extends Component {
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id)
  }

  onSubmit = formValues => this.props.editStream(this.props.match.params.id, formValues)

  render() {
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
  return {
    recipe: state.recipe[ownProps.match.params.id]
  }
}

export default connect(
  mapStateToProps,
  {fetchRecipes, editRecipe}
  )(RecipeEdit)
