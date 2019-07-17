import React from 'react'
import { Link } from 'react-router-dom'

const NoRecipes = () => {
  return (
    <div
        style={{ display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
      >
        <span>You have no recipes!</span>
        <div
          style={{display: 'flex', justifyContent: 'space-around', marginTop: '5rem'}}>
          <Link className='btn' to='/recipe/new'>Create a recipe</Link>
          <Link className='btn' to='/'>Search for recipes</Link>
        </div>

      </div>
  )
}

export default NoRecipes
