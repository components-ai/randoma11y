import { fromJS } from 'immutable'
import fetch from 'isomorphic-fetch'

const REQUEST_COMBOS = 'REQUEST_COMBOS'
const RECEIVE_COMBOS = 'RECEIVE_COMBOS'

const initialState = fromJS({
  top: [],
  isFetching: false
})

const combosReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_COMBOS:
      return state.merge({
        isFetching: true
      })

    case RECEIVE_COMBOS:
      return state.merge({
        isFetching: false,
        top: action.combos
      })

    default:
      return state
  }
}

export default combosReducer

// Actions

export const requestCombos = () => ({
  type: REQUEST_COMBOS
})

const receiveCombos = json => ({
  type: RECEIVE_COMBOS,
  combos: json
})

export const fetchCombos = () => {
  return dispatch => {
    dispatch(requestCombos())

    return fetch('https://randoma11y.com/combos/top')
      .then(req => req.json())
      .then(json => dispatch(receiveCombos(json)))
  }
}
