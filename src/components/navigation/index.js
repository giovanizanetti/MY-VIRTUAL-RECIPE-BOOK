import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from "react-redux"
import Sidenav from './Sidenav'
import './index.css'

const NavBar = (props) => {
  const { uid } = props.auth
  return (
    <nav className='nav-wrapper grey darken-3' id='nav'>
      <Sidenav
        uid={uid}
      />
      <div className='container'>
        <Link to='/' className='brand-logo'>Recipe Book App</Link>
        <ul className='right hide-on-med-and-down'>
          { !uid
            ? <SignedOutLinks />
            : <SignedInLinks /> }
        </ul>
      </div>
    </nav>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps)(NavBar)
