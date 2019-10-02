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
    const { signOut, myRecipes } = this.props
    const favoritesLength = myRecipes && myRecipes.filter(rec => rec.favorite).length
    const myRecipesLength = myRecipes && myRecipes.length 
    const isDesktop = this.state.isDesktop
    return (
        <>
         { !isDesktop && <li><NavLink to='/recipes'>Home</NavLink></li> }
          <li>
            <NavLink to='/recipe/new'>Create Recipe</NavLink>
          </li>
          <li>
            <NavLink to='/myRecipes'>My Recipes <span className='red-text red-darken-2'>({ myRecipesLength })</span></NavLink>
          </li>
          <li>
            <NavLink to='/myRecipes'>Favorites <span className='red-text red-darken-2'>({ favoritesLength })</span></NavLink>
          </li>
          <li>
            <NavLink onClick={ signOut } to='/recipes'>Log Out</NavLink>
          </li>
          { isDesktop
            ? <Avatar isDesktop={ isDesktop } />
            : null }
      </>
    )
  }
}

const mapStateToProps = state => {
  const { firebase, firestore } = state
  const currentUser = firebase.auth.uid
  return {
    initials: firebase.profile.initials,
    myRecipes: firestore.ordered.recipes 
      && firestore.ordered.recipes.filter(rec => rec.userId === currentUser)
  }
}

export default connect(mapStateToProps, { signOut })(SignedInLinks)
