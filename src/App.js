import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Router from './Router'
import Navigation from './components/Navigation'

import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <div
          className='container'
          style={{
            paddingTop: '5em',
            marginBottom: '10%',
            height: '100vh',
          }}
        >
          <Router />
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => {
  return { state }
}

export default connect(mapStateToProps)(App)
