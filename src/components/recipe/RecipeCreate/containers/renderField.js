import React, { Component } from 'react'

class RenderField extends Component {
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

export default RenderField
