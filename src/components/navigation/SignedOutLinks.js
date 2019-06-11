import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


// This component must be shown on the home page when the user is not logged in.


class SignedOutLinks extends Component {
  render() {
    return (
      <>
      <ul className='right hide-on-med-and-down'>
        <li><NavLink to='/signin'>Log in</NavLink></li>
        <li><NavLink to='/signup'>Sign Up</NavLink></li>
      </ul>
    </>
    )
  }
}

export default SignedOutLinks
