import { combineReducers } from 'redux'
import { routeReducer } from 'react-router-redux'
import loading from './loading'

const rootReducer = combineReducers({
  loading,
  routing: routeReducer
})

export default rootReducer
