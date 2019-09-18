import React from 'react'
import  AllergensInfo from '../../RecipeDetail/AllergensInfo'
import { Link } from 'react-router-dom'
import PrepTime from '../../RecipeDetail/PrepTime.js'
import { trimString } from '../../../../myLibrary'


const CardReveal = props => {
  const {
    isGlutenFree, isDairyFree, isVegetarian,
    isLowFodmap, isVegan, readyInMinutes,
    title, id, cookingMinutes
  } = props
  return (
    <div className="card-reveal">
      <i 
        className="card-title grey-text text-darken-4 material-icons right"
        style={{
          position: 'absolute',
          top: '1rem',
          right: '2rem',
          fontSize: '1.5rem'
        }}  
      >close</i>
      <span 
        className="card-title grey-text text-darken-4"
        style={{
          textAlign: 'center',
          fontWeight: '400',
          fontSize: '1.5rem',
          marginTop: '.8rem'
        }}  
      >
        { trimString(title, 40) }
      </span>
      <div style={{margin: '2rem 0'}}>
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: ".5rem "       
          }}>
          <PrepTime
            cookingMinutes={cookingMinutes}
            readyInMinutes={readyInMinutes}
          />
        </div>
        <AllergensInfo
          isGlutenFree={isGlutenFree}
          isDairyFree={isDairyFree}
          isVegetarian={isVegetarian}
          isLowFodmap={isLowFodmap}
          isVegan={isVegan}
        />
      </div>

      <Link className='link-fullrecipe' to={`/recipes/${id}`}>See the full recipe</Link>
    </div>
  )
}
export default CardReveal
