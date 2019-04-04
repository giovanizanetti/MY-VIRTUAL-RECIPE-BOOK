import React from 'react'
import { NavLink } from 'react-router-dom'

// This component must be shown on the home page when the user logged in.

const SignedInLinks = () => {
  return (
    <ul className='right'>
      <li><NavLink to='/'>Log Out</NavLink></li>
      <li><NavLink to='/'>Something</NavLink></li>
      <li><NavLink to='/showAllRecipes' className='btn btn-floating pink lighten-1'>GZ</NavLink></li>
    </ul>
  )
}
 
export default SignedInLinks
