import React, { Component } from 'react'
import M from "materialize-css/dist/js/materialize.min.js"
import SharePlatforms from '../components/recipe/RecipeDetail/SharePlatforms'
import PrintPreferences from '../components/recipe/RecipeDetail/PrintPreferences'

class Modal extends Component {
  componentDidMount() {
      const options = {
        inDuration: 250,
        outDuration: 250,
        opacity: 0.5,
        dismissible: true,
        startingTop: "8%",
        endingTop: "30%"
      };
    M.Modal.init(this.Modal, options)
  }
  render() {
   const renderContent = () => {
      switch (this.props.id) {
        case 'modal1':
          return <span>{ this.props.popUp }</span>
        case 'modal2':
          return <span>{ this.props.popUp }</span>
        case 'modal3':
          return <PrintPreferences />
        default:
          return <SharePlatforms />
    }
   }
    return (
      <div
        ref={ Modal => { this.Modal = Modal }}
        id={ this.props.id }
        className="modal"
      >
        {/* If I want Bottom Sheet Modal then addbottom-sheet class */}
        <div className="modal-content">
          { renderContent() }
        </div>
        <div className="modal-footer">
          <a href="#" className="modal-close waves-effect waves-red btn-flat">
            Cancel
          </a>
          { this.props.id !== 'modal4'
            ? <a href="#" className="modal-close waves-effect waves-green btn-flat">Yes</a>
              : null
          }
        </div>
      </div>
    )
  }
}


export default Modal
