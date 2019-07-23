import React from 'react'
import CheckBox from '../../ChechBox'
import style from './style'
import { connect } from 'react-redux'


const Instructions = ({ instructions, prepare }) => {
  const { instruction_li} = style.instructions
  const renderInstructions =
    instructions && instructions.map((object, i) => {
      return (object.steps.map(step => (
        <div key={step.number}>
          <li style={ instruction_li }>
            { prepare && <CheckBox /> }
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

const mapStateToProps = state => {
  return {
    prepare: state.checkBoxes.active
  }
}

export default connect(mapStateToProps)(Instructions)





