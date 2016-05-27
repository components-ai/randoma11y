import { createStore, applyMiddleware, compose, browserHistory } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import logger from './logger'
import rootReducer from './reducers'

const reduxRouter = routerMiddleware(browserHistory)

export default function configureStore (initialState) {
  let createStoreWithMiddleware

  if (process.env.NODE_ENV !== 'production') {
    createStoreWithMiddleware = compose(
      applyMiddleware(
        reduxRouter,
        thunk,
        logger
      ),
      typeof window === 'object' &&
      typeof window.devToolsExtension !== 'undefined'
        ? window.devToolsExtension() : (f) => f
    )(createStore)
  } else {
    createStoreWithMiddleware = compose(
      applyMiddleware(
        reduxRouter,
        thunk
      )
    )(createStore)
  }

  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
