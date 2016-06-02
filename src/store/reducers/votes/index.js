import { fromJS } from 'immutable'
import fetch from 'isomorphic-fetch'

const SEND_UPVOTE = 'SEND_UPVOTE'
const SEND_DOWNVOTE = 'SEND_DOWNVOTE'
const SET_CURRENT_COMBO = 'SET_CURRENT_COMBO'

const initialState = fromJS({
  upvotes: [],
  downvotes: [],
  currentCombo: [],
  currentVote: null
})

const votesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_UPVOTE:
      return state.merge({
        currentVote: 'up',
        upvotes: state.get('upvotes').push(action.combo)
      })

    case SEND_DOWNVOTE:
      return state.merge({
        currentVote: 'down',
        downvotes: state.get('downvotes').push(action.combo)
      })

    case SET_CURRENT_COMBO:
      return state.merge({
        currentCombo: action.combo,
        currentVote: null
      })

    default:
      return state
  }
}

export default votesReducer

// Actions

export const sendUpvote = combo => ({
  type: SEND_UPVOTE,
  combo
})

export const sendDownvote = combo => ({
  type: SEND_DOWNVOTE,
  combo
})

export const setCurrentCombo = combo => ({
  type: SET_CURRENT_COMBO,
  combo
})

export const upvote = (combo) => {
  console.log(combo)
  return dispatch => {
    dispatch(sendUpvote(combo))

    console.log(combo)
    return fetch('http://www.randoma11y.com/votes', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        vote: { value: true },
        combo: combo
      })
    })
    .then(req => req.json())
    .then(json => console.log(json))
  }
}

export const downvote = (combo) => {
  return dispatch => {
    dispatch(sendDownvote(combo))

    return fetch('http://www.randoma11y.com/votes', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        vote: { value: false },
        combo: combo
      })
    })
    .then(req => req.json())
    .then(json => console.log(json))
  }
}
