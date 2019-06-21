import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store'
import "materialize-css/dist/css/materialize.min.css"



store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root'))
})

