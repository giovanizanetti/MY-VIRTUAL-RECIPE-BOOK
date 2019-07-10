import React from 'react'

const style = {
  position: 'relative',
  pointerEvents: 'inherit',
  opacity: 'unset'
}

const Checkbox = props => <input className={props.className} style={style} type="checkbox" />
export default Checkbox
