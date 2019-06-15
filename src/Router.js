import React from 'react'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import RecipeCreate from './components/recipe/RecipeCreate'
import RecipeEdit from './components/recipe/RecipeEdit'
import RecipeDetail from './components/recipe/RecipeDetail'
import { Switch, Route } from 'react-router-dom'
import RenderAPIrecipes from './components/recipe/RenderAPIrecipes'
import RenderMyRecipes from './components/recipe/RenderMyRecipes'

const Router = () => (
  <Switch>
    <Route path='/' exact component={RenderAPIrecipes} />
    <Route path='/signin/' exact component={SignIn} />
    <Route path='/signup/' exact component={SignUp} />
    <Route path='/recipe/new' exact component={RecipeCreate} />
    <Route path='/recipe/edit/:id' exact component={RecipeEdit} />
    <Route path='/recipes/' exact component={RenderAPIrecipes} />
    <Route path='/recipes/:id' exact component={RecipeDetail} />
    <Route path='/myRecipes/' exact component={RenderMyRecipes} />
  </Switch>
)

export default Router
