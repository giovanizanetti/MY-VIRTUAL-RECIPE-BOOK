import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Navigation from './components/navigation'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path='/signin/' component={SignIn} />
          <Route path='/signup/' component={SignUp} />
        </Switch>
      </BrowserRouter>

    )
  }
}

export default App
