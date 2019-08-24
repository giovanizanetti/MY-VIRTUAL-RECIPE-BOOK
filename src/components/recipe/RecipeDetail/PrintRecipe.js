import React, { Component } from 'react'
import ReactToPrint from 'react-to-print'
import RecipeDetail from '../RecipeDetail'


class PrintRecipe extends Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <a href="#">Print this out!</a>}
          content={() => this.componentRef}
        />
        <RecipeDetail ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}

export default PrintRecipe
