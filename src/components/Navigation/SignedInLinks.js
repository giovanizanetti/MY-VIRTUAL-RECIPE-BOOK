import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { signOut } from '../../actions/authActions'
import Avatar from './Avatar'

// This component must be shown on the home page when the user logged in.
const SignedInLinks = (props) => {
  const { signOut, myRecipes, isDesktop } = props
  const favoritesLength =
    myRecipes && myRecipes.filter((rec) => rec.favorite).length
  const myRecipesLength = myRecipes && myRecipes.length
  return (
    <>
      {!isDesktop && (
        <li>
          <NavLink to='/recipes'>Home</NavLink>
        </li>
      )}
      <li>
        <NavLink to='/recipe/new'>Create Recipe</NavLink>
      </li>
      <li>
        <NavLink to='/myRecipes'>
          My Recipes{' '}
          <span className='red-text red-darken-2'>
            {myRecipesLength && `(${myRecipesLength})`}
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink to='/myRecipes/favorites'>
          Favorites{' '}
          <span className='red-text red-darken-2'>
            {favoritesLength && `(${favoritesLength})`}
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink onClick={signOut} to='/recipes'>
          Log Out
        </NavLink>
      </li>
      {isDesktop ? <Avatar isDesktop={isDesktop} /> : null}
    </>
  )
}

const mapStateToProps = (state) => {
  const { firebase, firestore } = state
  const currentUser = firebase.auth.uid
  return {
    initials: firebase.profile.initials,
    myRecipes:
      firestore.ordered.recipes &&
      firestore.ordered.recipes.filter((rec) => rec.userId === currentUser),
  }
}

export default compose(
  connect(mapStateToProps, { signOut }),
  firestoreConnect([
    {
      collection: 'recipes',
    },
  ])
)(SignedInLinks)
