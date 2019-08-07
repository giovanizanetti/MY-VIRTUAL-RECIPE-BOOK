import React, { Component } from 'react'
import ReactToPrint from 'react-to-print'
import Recipe from './index'


class PrintRecipe extends Component {
  render() {
    return (
      <>
        <ReactToPrint
          trigger={() => <a href="#">Print this out!</a>}
          content={() => this.componentRef}
        />
        <Recipe
          ref={el => (this.componentRef = el)} />
      </>
    )
  }
}

export default PrintRecipe
