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
    Check for the window size
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
    const { uid } = this.props.auth
    const { isDesktop } = this.state
    return (
      <nav className='nav-wrapper grey darken-3' id='nav'>
        { 
          !isDesktop 
          && <Sidenav uid={uid}/>
        }
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
