import React, { Component } from 'react'
import CardsList from './CardsList.js'
import Select from './Select'
import { showCheckBoxes } from '../../../actions/checkBox'
import { connect } from 'react-redux'
import {  setCurrentPage } from '../../../actions/pagination'
import Pagination from '../../Pagination'


class RecipeList extends Component {
  componentDidMount(){
    const { isActive, setCurrentPage } = this.props
    isActive && showCheckBoxes()
    setCurrentPage(1)
  }

  render() {
    const { recipes, history, auth, 
      recipesPerPage, currentPage, 
      setCurrentPage, id 
    } = this.props

    const indexOfLastRecipe = currentPage * recipesPerPage
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
    const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe)

    const paginate = pageNumber => {
      return setCurrentPage(pageNumber)
    }

    return (
      <>
        <div className="row col">
          {
            auth.uid && id === 'myRecipes' &&
            <Select
              recipes={ recipes }
              history={ history }
            />
          }
          <CardsList
            recipes={ currentRecipes }
            history={ history }
          />
        </div>
        <div>
          <Pagination 
              totalRecipes={ recipes.length }
              currentPage={ currentPage }
              recipesPerPage={ recipesPerPage }
              paginate={ paginate }
            /> 
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  const { checkBoxes, firebase, recipes } = state
  return {
    isActive: checkBoxes.active,
    auth: firebase.auth,
    currentPage: recipes.currentPage,
    recipesPerPage: recipes.recipesPerPage
  }
}

export default connect(mapStateToProps, { 
  showCheckBoxes, 
  setCurrentPage 
})(RecipeList)








