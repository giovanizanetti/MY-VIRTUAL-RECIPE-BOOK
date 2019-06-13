import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecipeById, selectRecipe } from '../../../actions/recipeActions'
import { Redirect } from 'react-router-dom'
import Occasions from './Occasions'
import Ingredients from './Ingredients'
import PrepTime from './PrepTime'
import NutricInfo from './nutricInfo'
import Servings from './Servings'
import Header from './header'
import Instructions from './Instructions'

class Recipedetail extends Component {
  componentDidMount(){
    if(this.props.recipe === null){
      // fetch this specific recipe based on the params of the url
      // http://localhost:3000/recipes/1
      fetchRecipeById(this.props.match.params.id)
      this.props.selectRecipe(this.props.match.params.id)
      console.log(this.props.match.params.id)
    }
  }

  render() {
    if(!this.props.auth.uid) return <Redirect to='/signin' />

    const {
      title, image, occasions, extendedIngredients,
      cookingMinutes, readyInMinutes, servings, glutenFree,
      vegetarian, lowFodmap, vegan, dairyFree, analyzedInstructions
    } = this.props.recipe

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
          <NutricInfo
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
