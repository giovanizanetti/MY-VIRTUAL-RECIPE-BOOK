import React from 'react'
import GlutenFree from './GlutenFree'
import LowFodMap from './LowFodmap'
import Vegan from './Vegan'
import Vegetarian from './Vegetarian'
import DairyFree from './DairyFree'

const AllergensInfo = props => {
  const {
    isGlutenFree, isVegetarian, isLowFodmap, isVegan, isDairyFree
  } = props

  return (
    <ul className='container'>
      <GlutenFree isGlutenFree={isGlutenFree}/>
      <LowFodMap isLowFodmap={isLowFodmap}/>
      <Vegan isVegan={isVegan} />
      <Vegetarian isVegetarian={isVegetarian}/>
      <DairyFree  isDairyFree={isDairyFree} />
    </ul>
  )
}

export default AllergensInfo


