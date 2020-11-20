import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import LoaderProgressBar from './components/LoaderProgressBar'

import { Provider } from 'react-redux'
import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'

import './index.css'
import 'materialize-css/dist/css/materialize.min.css'

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate
        loading={
          <div className='container'>
            <LoaderProgressBar />
          </div>
        }
        persistor={persistor}
      >
        <App />
      </PersistGate>
    </Provider>,
    document.getElementById('root')
  )
})
