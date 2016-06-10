import { combineReducers } from 'redux'
import { routeReducer } from 'react-router-redux'
import loading from './loading'
import votes from './votes'
import combos from './combos'

const rootReducer = combineReducers({
  loading,
  routing: routeReducer,
  votes,
  combos
})

export default rootReducer
