import axios from 'axios'

export default axios.create({
  baseURL: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes',
  headers: {
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "X-RAPIDAPI-KEY": "0f1f47b39bmsh0e4d2a04bd035cdp1121bejsnf58a226a5005",
  },
});
