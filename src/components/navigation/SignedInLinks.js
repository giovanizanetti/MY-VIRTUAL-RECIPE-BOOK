import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../actions/authActions'

// This component must be shown on the home page when the user logged in.

const SignedInLinks = props => {
  return (
    <ul className='right'>
      <li><NavLink onClick={props.signOut} to='/recipes'>Log Out</NavLink></li>
      <li><NavLink  to='/'>Something</NavLink></li>
      <li><NavLink to='/showAllRecipes' className='btn btn-floating pink lighten-1'>GZ</NavLink></li>
    </ul>
  )
}


export default connect(null, { signOut })(SignedInLinks)
