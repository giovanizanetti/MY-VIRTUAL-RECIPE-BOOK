import React from 'react'
import CheckBox from '../../ChechBox'
import style from './style'

const Instructions = ({instructions}) => {
  const { instruction_li} = style.instructions
  const renderInstructions =
    instructions && instructions.map((object, i) => {
      return (object.steps.map(step => (
        <div key={step.number}>
          <li style={ instruction_li }>
            <CheckBox />
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

export default Instructions





