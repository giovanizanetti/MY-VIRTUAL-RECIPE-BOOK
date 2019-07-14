import React, { Component } from 'react'
import M from "materialize-css/dist/js/materialize.min.js"

export class renderField extends Component {
  componentDidMount(){
    M.textareaAutoResize(document.querySelector(".materialize-textarea"))
  }

  render() {
    const { input, label, type, textarea, meta: { touched, error, } } = this.props
    const className = `input-field materialize-textarea ${error && touched ? 'wrong' : ''}`
    return (
      <div>
        <div>
          { !textarea
          ? <input {...input} type={type} placeholder={label}/>
          : <textarea
              style={{ boxSizing: 'unset', resize: 'vertical'}}
              {...input}
              id='textarea'
              className={className}
              placeholder={label}
              autoComplete='on'
            />
        }
          {touched && error && <span>{error}</span>}
        </div>
      </div>
    )
  }
}
