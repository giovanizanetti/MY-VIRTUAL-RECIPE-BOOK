import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Occasions from './Occasions'
import Ingredients from './Ingredients'
import PrepTime from './PrepTime'
import NutricInfo from './nutricInfo'
import Servings from './Servings'
import Title from './title'
import { fetchRecipeById } from '../../../actions/recipeActions'



class Recipedetail extends Component {

  componentDidMount(){
    if(this.props.recipe === null){
      // fetch this specific recipe based on the params of the url
      // http://localhost:3000/recipes/1
      fetchRecipeById(this.props.match.params.id) // match.params.id should be 1 in this example
    console.log(this.props.match.params.id)

    }
  }

  // renderOccasions = () => {
  //   return(
  //     this.props.recipe.occasions &&
  //     this.props.recipe.occasions.length > 0 &&
  //     this.props.recipe.occasions.map(
  //       (occasion, index) => !index === -1
  //       ? ` ${occasion},`
  //       :`${occasion}.`)
  //   )
  // }

  // renderInstructions = () => {
  //   return recipe && recipe.analyzedInstructions.map(x => {
  //     return(x.steps.map(step => (
  //       <div key={step.number}>
  //         <span>{`- ${step.number}: `}</span>
  //         <p>{step.step}</p>
  //       </div>
  //     )))
  //   })
  // }

  render() {

    //If user is loged out redirect to sign in page
    if(!this.props.auth.uid){
      return <Redirect to='/signin' />
    }

    const {
      title, image, occasions, extendedIngredients,
      cookingMinutes, readyInMinutes, servings, glutenFree,
      vegetarian, lowFodmap, vegan, dairyFree
    } = this.props.recipe

    return (
      <div className='container'>
        <div className='card'>
          <Title title={title} />
          <div className="card-image">
            <img src={image} alt={title}/>
          </div>
          {/* <p>{ occasions.length > 0 ? `This recipe is a perfect combination for ${this.renderOccasions()}`: 'Sorry, no occasions sugestions for your recipe!'}</p> */}
          <Occasions occasions={occasions} />
          <PrepTime
            cookingMinutes={cookingMinutes}
            readyInMinutes={readyInMinutes}
          />
          <Ingredients ingredients={extendedIngredients} />
          <div className='container'>
            <h3>Instructions</h3>
            {/* {this.renderInstructions()} */}
          </div>
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


const mapStateToProps = (state) => {

  return {
    recipe: state.selectedRecipe,
    recipes: state.recipes,
    auth: state.firebase.auth
  }
}


export default connect(mapStateToProps, { fetchRecipeById })(Recipedetail)
