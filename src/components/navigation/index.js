import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from "react-redux"
import Sidenav from './Sidenav'

// Nav Bar need to be fixed, side bar is not working on mobile size
//Probably Java script from MaterializeCSS.`
const NavBar = (props) => {
  const { uid } = props.auth
  return (
    <nav className='nav-wrapper grey darken-3'>
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
