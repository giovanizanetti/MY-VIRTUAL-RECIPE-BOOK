import React from 'react'

const LoaderSpinner = () => {
  return (
    // Circular option
    // <div className="preloader-wrapper big active">
    //   <div className="spinner-layer spinner-blue-only">
    //     <div className="circle-clipper left">
    //       <div className="circle"></div>
    //     </div>
    //     <div className="gap-patch">
    //       <div className="circle"></div>
    //     </div>
    //     <div className="circle-clipper right">
    //       <div className="circle"></div>
    //     </div>
    //   </div>
    // </div>


    // Linear
    <div className="progress">
      <div className="indeterminate"></div>
  </div>
  )
}

export default LoaderSpinner
