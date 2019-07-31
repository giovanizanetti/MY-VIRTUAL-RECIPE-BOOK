import React from 'react'

const Checkbox = props => {
  const style = !props.style && {
    position: 'relative',
    pointerEvents: 'inherit',
    opacity: 'unset'
  }
  console.log(props.checked)
  return (
    <input
      // checked={props.checked}
      style={ props.style || style }
      type="checkbox"
      onChange={props.onChange}
      id={props.id}
      value={props.value}
    />
  )
}
export default Checkbox
