import React from 'react'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import MyRecipes from './components/recipe/myRecipes/MyRecipes'
import RecipeCreate from './components/recipe/RecipeCreate'
import RecipeEdit from './components/recipe/RecipeEdit'
import RecipeList from './components/recipe/RecipeList/index'
import RecipeDetail from './components/recipe/RecipeDetail'
import { Switch, Route } from 'react-router-dom'

const Router = () => (
  <Switch>
    <Route path='/' exact component={RecipeList} />
    <Route path='/signin/' exact component={SignIn} />
    <Route path='/signup/' exact component={SignUp} />
    <Route path='/recipe/new' exact component={RecipeCreate} />
    <Route path='/recipe/edit/:id' exact component={RecipeEdit} />
    <Route path='/recipes/' exact component={RecipeList} />
    <Route path='/recipes/:id' exact component={RecipeDetail} />
    <Route path='/myRecipes/' exact component={MyRecipes} />
  </Switch>
)

export default Router
