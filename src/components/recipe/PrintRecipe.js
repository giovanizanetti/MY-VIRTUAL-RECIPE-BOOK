import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import RecipeDetail from '../recipe/RecipeDetail'

const PrintRecipe = () => {
  const componentRef = useRef();
  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <RecipeDetail ref={componentRef} />
    </div>
  );
}

export default PrintRecipe
