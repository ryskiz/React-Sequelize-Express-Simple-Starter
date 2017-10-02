import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default (function(){
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    user: require('./UserRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}())