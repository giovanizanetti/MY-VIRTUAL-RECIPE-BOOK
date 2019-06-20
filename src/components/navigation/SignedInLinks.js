import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../actions/authActions'

// This component must be shown on the home page when the user logged in.

const SignedInLinks = props => {
  return (
    <>
      <li><NavLink  to='/recipe/new'>Create Recipe</NavLink></li>
      <li><NavLink  to='/myRecipes'>My Recipes</NavLink></li>
      <li><NavLink onClick={props.signOut} to='/recipes'>Log Out</NavLink></li>
      <li><NavLink to='/showAllRecipes' className='btn btn-floating pink lighten-1'>{ props.initials }</NavLink></li>
    </>
  )
}

const mapStateToProps = state => {
  return {
    initials: state.firebase.profile.initials
  }
}

export default connect(mapStateToProps, { signOut })(SignedInLinks)
