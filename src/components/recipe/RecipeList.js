import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchRecipes } from '../../actions'
import axios from 'axios'

class RecipeList extends Component {
  render() { 
    return (
      <div>
        RecipeList
      </div>
    )
  }

  componentDidMount = () => {
    axios.get('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?', {
      headers: {
        "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "X-RapidAPI-Key": "8e1196b484mshaee2f822d87a11dp10a1dejsn3533f0b051b3"
      },
      params: {
        number: 20
      }
    })
    .then(data => console.log(data, 'I am the being fetched from componentDidMount'))
    .then(error => console.log(error))
  }
  
}




const mapStateToProps = state => {
  console.log(state, 'I am the state')
  return {
    recipes: state
  }
}

export default connect(mapStateToProps, { fetchRecipes })(RecipeList)