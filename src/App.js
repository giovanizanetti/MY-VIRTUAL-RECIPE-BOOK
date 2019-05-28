import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Navigation from './components/navigation'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import RecipeCreate from './components/recipe/RecipeCreate'
import RecipeEdit from './components/recipe/RecipeEdit'
import RecipeList from './components/recipe/RecipeList'
import RecipeDetail from './components/recipe/RecipeDetail'
import { connect } from 'react-redux'
import MyRecipes from './components/recipe/MyRecipes'


class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path='/signin/' exact component={SignIn} />
          <Route path='/signup/' exact component={SignUp} />
          <Route path='/recipe/new' exact component={RecipeCreate} />
          <Route path='/recipe/edit/:id' exact component={RecipeEdit} />
          <Route path='/recipes' exact component={RecipeList} />
          <Route path='/recipes/:id' exact component={RecipeDetail} />
          <Route path='/myRecipes/' exact component={MyRecipes} />
        </Switch>
      </BrowserRouter>

    )
  }
}

const mapStateToProps = (state) => {
return {state}
}

export default connect(mapStateToProps)(App)
