import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import "materialize-css/dist/css/materialize.min.css"
import { PersistGate } from 'redux-persist/integration/react'
import LoaderProgressBar from './components/LoaderProgressBar'


store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={ <div className='container'><LoaderProgressBar /></div>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
  document.getElementById('root'))
})

