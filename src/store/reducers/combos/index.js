import { fromJS } from 'immutable'
import fetch from 'isomorphic-fetch'

const initialState = fromJS({
  topCombos: []
})

const combosReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state
  }
}

export default combosReducer

// Actions
