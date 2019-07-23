import React from 'react'
import { connect } from 'react-redux'
import { prepareRecipe } from '../../../actions/recipeActions'
import Countdown from './countdown'

const PrepareRecipe = ({ prepareRecipe, cookingMinutes, prepare }) => {
  return (


      <div style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
         <button
            className={ `btn-small ${!prepare ? 'yellow black-text' : 'red'}`}
            onClick={ prepareRecipe }
            style={{ marginRight: '0.5rem', alignSelf: 'flex-end'}}
          >{!prepare ? 'Prepare' : 'X'}
          </button>
        { prepare &&
          <Countdown
            cookingMinutes={ cookingMinutes }
          />
        }

      </div>
  )
}

const mapStateToProps = state => {
  return {
    prepare: state.checkBoxes.active
  }
}

export default connect(mapStateToProps, { prepareRecipe })(PrepareRecipe)
