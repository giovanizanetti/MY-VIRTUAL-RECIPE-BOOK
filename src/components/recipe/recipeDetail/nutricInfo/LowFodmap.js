import React from 'react'

const LowFodmap = ({isLowFodmap}) => {
  const lowFodmap =
    isLowFodmap && isLowFodmap === true
    ? 'This recipe is low fodmap'
    : 'This recipe is not low fodmap'

  return <li>{lowFodmap}</li>
}

export default LowFodmap
