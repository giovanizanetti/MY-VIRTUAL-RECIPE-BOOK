import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Navigation from './components/navigation'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import RecipeCreate from './components/recipe/RecipeCreate'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path='/signin/' exact component={SignIn} />
          <Route path='/signup/' exact component={SignUp} />
          <Route path='/recipe/new' exact component={RecipeCreate} />
        </Switch>
      </BrowserRouter>

    )
  }
}

export default App
