import { createStore, applyMiddleware, compose } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'

import rootReducer from '../src/reducers'
import thunk from 'redux-thunk'
import fbConfig from './config/fbConfig'
import storage from 'redux-persist/lib/storage'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
  key: 'recipes',
  storage: storage,
  whitelist: ['recipes'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer,
  composeEnhancers(
    applyMiddleware(
      thunk.withExtraArgument({
        getFirebase,
        getFirestore,
      })
    ),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {
      useFirestoreForProfile: true,
      userProfile: 'users',
      attachAuthIsReady: true,
    })
  )
)

export const persistor = persistStore(store)

export const rrfConfig = {
  fbConfig,
  dispatch: store.dispatch,
}
