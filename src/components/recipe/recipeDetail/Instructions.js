import React, { Component } from 'react'
import CheckBox from '../../CheckBox'
import style from './style'
import { connect } from 'react-redux'


class Instructions extends Component {
  state={}

  handleChange = e => {
      this.setState({
        [e.target.id]: e.target.checked
      })
  }

  render() {
    const { instructions, prepare } = this.props
    const { instruction_li} = style.instructions
    const renderInstructions =
      instructions && instructions.map(object => {
        return (object.steps.map((step, i) => (
          <div key={step.number}>
            <li
              className={ this.state[i] ? 'line-through' : ''}
              style={ instruction_li }>
              {
                prepare &&
                <CheckBox
                  id={i}
                  onChange={ this.handleChange }/>
                }
              {` - ${step.step}`}
            </li>
          </div>
        )))
      })

    return (
      <div className='container'>
        <h3>Instructions</h3>
        <ul >{ renderInstructions }</ul>
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    prepare: state.checkBoxes.active
  }
}

export default connect(mapStateToProps)(Instructions)





