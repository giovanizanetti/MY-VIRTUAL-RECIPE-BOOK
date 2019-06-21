import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const Avatar = props => {
  return (
    <li>
      <NavLink
        to='/showAllRecipes'
        className='btn btn-floating pink lighten-1'
      >
        { props.initials }
      </NavLink></li>
  )
}

const mapStateToProps = state => {
  return {
    initials: state.firebase.profile.initials
  }
}

export default connect(mapStateToProps)(Avatar)
