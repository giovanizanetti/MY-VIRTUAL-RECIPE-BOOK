import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from "react-redux"

const NavBar = (props) => {

  return (
    <nav className='nav-wrapper grey darken-3'>
      <div className='container'>
        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        <Link to='/' className='brand-logo'>Recipe Book App</Link>
        {!props.auth.uid ?  <SignedOutLinks /> : <SignedInLinks />}
      </div>
    </nav>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(NavBar)
