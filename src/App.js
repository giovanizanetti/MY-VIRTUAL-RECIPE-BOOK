import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navigation from './components/navigation'
import { connect } from 'react-redux'
import Router from './Router'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <div class="container" style={{ paddingTop: "5em"}}>
          <Router />
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => {
return {state}
}

export default connect(mapStateToProps)(App)
