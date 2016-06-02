import { combineReducers } from 'redux'
import { routeReducer } from 'react-router-redux'
import loading from './loading'
import votes from './votes'

const rootReducer = combineReducers({
  loading,
  routing: routeReducer,
  votes
})

export default rootReducer
