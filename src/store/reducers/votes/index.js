import { fromJS } from 'immutable'
import fetch from 'isomorphic-fetch'

const SEND_UPVOTE = 'SEND_UPVOTE'
const SEND_DOWNVOTE = 'SEND_DOWNVOTE'

const initialState = fromJS({
  upvotes: [],
  downvotes: []
})

const votesReducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case SEND_UPVOTE:
      return state.merge({
        upvotes: state.get('upvotes').push(action.combo)
      })

    case SEND_DOWNVOTE:
      return state.merge({
        downvotes: state.get('downvotes').push(action.combo)
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

const shouldVote = () => true

const upvote = (combo) => {
  return dispatch => {
    dispatch(sendUpvote(combo))

    return fetch('http://randoma11y.com/votes', {
      method: 'POST',
      body: JSON.stringify({
        vote: true,
        combo
      })
      .then(req => req.json())
      .then(json => console.log(json))
    })
  }
}

const downvote = (combo) => {
  return dispatch => {
    dispatch(sendDownvote(combo))

    return fetch('http://randoma11y.com/votes', {
      method: 'POST',
      body: JSON.stringify({
        vote: false,
        combo
      })
      .then(req => req.json())
      .then(json => console.log(json))
    })
  }
}
