import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecipeById, selectRecipe } from '../../../actions/recipeActions'
import { Redirect } from 'react-router-dom'
import Occasions from './Occasions'
import Ingredients from './Ingredients'
import PrepTime from './PrepTime'
import AllergensInfo from './allergensInfo'
import Servings from './Servings'
import Header from './header'
import Instructions from './Instructions'
import LoaderSpinner from '../../LoaderSpinner'

class Recipedetail extends Component {
//Later => Create a check to check wether the user fetch Recipe from the API
//or from 'MyRecipes'?
// Create fetchMYRecipeById action

  componentDidMount(){
    if(this.props.recipe === null){
      // fetch this specific recipe based on the params of the url
      this.props.fetchRecipeById(this.props.match.params.id)
      // this.props.selectRecipe(this.props.match.params.id)
    }
  }

  render() {
    const { recipe, auth } = this.props
    if(!recipe) return <LoaderSpinner />
    if(!auth.uid) {
      console.log(this.props)
      return <Redirect to='/signin' />
    }

    //Seens like the data does not come from the same place from the API,
    //Using || operator was a way that I could fix it.
    const {
      title, image, occasions, extendedIngredients,
      cookingMinutes, readyInMinutes, servings, glutenFree,
      vegetarian, lowFodmap, vegan, dairyFree, analyzedInstructions
    } = this.props.recipe.data || this.props.recipe

    return (
      <div className='container'>
        <div className='card'>
          <Header title={title} image={image} />
          <Occasions occasions={occasions} />
          <PrepTime
            cookingMinutes={cookingMinutes}
            readyInMinutes={readyInMinutes}
          />
          <Ingredients ingredients={extendedIngredients} />
          <Instructions instructions={analyzedInstructions} />
          <AllergensInfo
            isGlutenFree={glutenFree}
            isLowFodmap={lowFodmap}
            isVegetarian={vegetarian}
            isVegan={vegan}
            isDairyFree={dairyFree}
          />
          <Servings servings={servings}/>
          <div>
            <button>Save Recipe</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipe: state.selectedRecipe,
    recipes: state.recipes,
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps, { fetchRecipeById, selectRecipe })(Recipedetail)
