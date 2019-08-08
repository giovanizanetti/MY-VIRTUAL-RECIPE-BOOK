import React, { Component } from 'react'
import CheckBox from '../../CheckBox'
import Style from './Style'
import { connect } from 'react-redux'

class Ingredients extends Component {
  state = {}

  handleChange = e => {
      this.setState({
        [e.target.id]: e.target.checked
      })
  }

  render() {
    const { ingredients, prepare } = this.props
    const { container, ingredient_li } = Style.ingredients
    const ingredientsList = ingredients && ingredients.map((ingredient, i) => {
      const { amount, unitShort } = ingredient.measures.metric
      const useOf = unitShort !== '' ? 'of' : ''
    return (
      <li
        className={ this.state[i] ? 'line-through' : ''}
        key={ingredient.id}
        style={ ingredient_li }>
        {
          prepare &&
          <CheckBox
            id={i}
            onChange={ this.handleChange }/>
        }
        {` - ${Math.round(amount)} ${unitShort} ${useOf} ${ingredient.name}`}
      </li>
    )
  })

    return (
      <div className='container' style={ container }>
        <h3>Ingredients</h3>
        { ingredientsList }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    prepare: state.checkBoxes.active
  }
}

export default connect(mapStateToProps)(Ingredients)
