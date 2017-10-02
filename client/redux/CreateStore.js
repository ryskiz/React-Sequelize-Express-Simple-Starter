import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {createLogger} from 'redux-logger'

// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- Saga Middleware ------------- */
  //in case you want reactotron
  // const sagaMonitor = Config.useReactotron ? console.tron.createSagaMonitor() : null
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor: null })
  middleware.push(sagaMiddleware)

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware, createLogger()))

  /* ------------- AutoRehydrate Enhancer ------------- */

  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
  // const createAppropriateStore = Config.useReactotron ? console.tron.createStore : createStore
  const store = createStore(rootReducer, compose(...enhancers))

  // kick off root saga
  sagaMiddleware.run(rootSaga)

  return store
}