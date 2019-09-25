import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../actions/authActions'
import Avatar from './Avatar'

// This component must be shown on the home page when the user logged in.
class SignedInLinks extends Component{
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
    const { signOut } = this.props
    const isDesktop = this.state.isDesktop
    return (
        <>
          <li className="sidenav-close"><NavLink to='/recipe/new'>Create Recipe</NavLink></li>
          <li><NavLink to='/myRecipes'>My Recipes</NavLink></li>
          <li><NavLink to='/myRecipes/favorites'>Favorites</NavLink></li>
          <li><NavLink onClick={ signOut } to='/recipes'>Log Out</NavLink></li>
          { isDesktop
            ? <Avatar isDesktop={ isDesktop } />
            : null }
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    initials: state.firebase.profile.initials
  }
}

export default connect(mapStateToProps, { signOut })(SignedInLinks)
