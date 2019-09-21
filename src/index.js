import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store'
import "materialize-css/dist/css/materialize.min.css"
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './store'


store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
  document.getElementById('root'))
})

