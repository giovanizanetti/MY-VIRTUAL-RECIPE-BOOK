import React from 'react'
import { NavLink } from 'react-router-dom'

// This component must be shown on the home page when the user is not logged in.

const SignedOutLinks = () => {
  return (
    <ul className='right'>
      <li><NavLink to='/signin'>Log in</NavLink></li>
      <li><NavLink to='/signup'>Sign Up</NavLink></li>
    </ul>
  )
}
 
export default SignedOutLinks
