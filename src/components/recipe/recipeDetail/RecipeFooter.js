import React from 'react'

const RecipeFooter = () => {
  const style = {
    margin: '1rem'
  }
  return (
    <>
      <hr />
      <div
        className='container'
        style={{display: 'flex', justifyContent: 'center'}}
      >
        <button style={style} className='red btn center-align'>Delete</button>
        <button style={style} className='grey btn center-align'>Edit</button>
        <button style={style} className='green btn center-align'>Print</button>
        <button style={style} className='black btn center-align'><i class="material-icons">share</i></button>
      </div>
    </>
  )
}
export default (RecipeFooter)
