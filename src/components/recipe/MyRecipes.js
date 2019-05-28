import React from 'react'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'

const MyRecipes = props => {
  return !props.myRecipes
  ? <h2>Loading</h2>
  : props.myRecipes.map(recipe => {
    return <h2 key={recipe.id}>{recipe.title}</h2>
  })

}

const mapStateToProps = state => {
  return {
    myRecipes: state.firestore.ordered.recipes
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'recipes'
  }])
)(MyRecipes)
