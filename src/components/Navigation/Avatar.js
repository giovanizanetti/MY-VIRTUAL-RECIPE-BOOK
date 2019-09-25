import React from 'react'
import { connect } from 'react-redux'

const Avatar = props => {
  return (
      <button
        className='btn btn-floating pink lighten-1'
      >
        { props.initials }
      </button>
  )
}

const mapStateToProps = state => {
  return {
    initials: state.firebase.profile.initials
  }
}

export default connect(mapStateToProps)(Avatar)
