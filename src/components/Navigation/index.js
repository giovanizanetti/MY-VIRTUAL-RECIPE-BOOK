import React from 'react'
import { NavLink } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from "react-redux"
import Sidenav from './Sidenav'
import './index.css'

class NavBar extends React.Component {
  state = {
    isDesktop: false
  }
  /*
    I had to check for the window size otherwise
    the Avatar component would be shown twice on the sidebar.
    The other possibility would be to have it as a last icon on
    the Sidebar component, and that is not what I want.
    I want Avatar to be shown as the very top of the sidebar
    or on very right on the navbar on Large screens.
  */
  componentDidMount() {
    this.updateScreenSize();
    window.addEventListener("resize", this.updateScreenSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateScreenSize);
  }

  updateScreenSize = () => {
    this.setState({ isDesktop: window.innerWidth > 992 });
  }


  render() {
    const {
      props,
    } = this

    const { uid } = props.auth
    const { isDesktop } = this.state
    return (
      <nav className='nav-wrapper grey darken-3' id='nav'>
        <Sidenav
          uid={uid}
        />
        <div className='container'>
          <NavLink to='/recipes' style={{fontSize: '1.5rem'}}className='flow-text'>Recipe Book App</NavLink>
          <ul className='right hide-on-med-and-down'>
            { !uid
              ? <SignedOutLinks />
              : <SignedInLinks isDesktop={ isDesktop }/> }
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps)(NavBar)
