import React, { Component } from 'react'
import CardsList from './CardsList.js'
import Select from './Select'
import { showCheckBoxes } from '../../../actions/checkBox'
import { connect } from 'react-redux'


class RecipeList extends Component {
  componentDidMount(){
    this.props.isActive && this.props.showCheckBoxes()
  }

  render() {
    console.log(this.props, 'hhhhhhhhhhh')
    const { recipes } = this.props
    return (
      <div className="row col">
        <Select recipes={recipes}
          />
        <CardsList
          recipes={recipes}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isActive: state.checkBoxes.active
  }
}

export default connect(mapStateToProps, { showCheckBoxes })(RecipeList)








