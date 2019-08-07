import React from 'react'
import recipe from '../images/recipe_icon.png'
import chefs_hat from '../images/chefs_hat_icon.png'

const LoaderSpinner = () => {
  const style = {
    container: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
    },
    span: {
      display: 'flex',
      justifyContent: 'center'
    },
    innerContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    imgIcons: {
      paddingRight: '2rem',
      paddingLeft: '2rem'
    }
  }
  const { container, span, innerContainer, imgIcons } = style

  return (
    <div className='container' style={ container }>
      <div style={ innerContainer }>
        <i><img style={ imgIcons } className='responsive-img' src={ recipe } alt="recipe icon"/></i>
        <span style={ span }>Your recipes are on the way...</span>
        <i><img style={ imgIcons } className='responsive-img' src={ chefs_hat }alt="chef's hat icon" /></i>
      </div>
      <div className="progress" >
        <div className="indeterminate"></div>
      </div>
    </div>
  )
}

export default LoaderSpinner
