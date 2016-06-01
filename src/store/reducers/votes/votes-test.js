import test from 'ava'
import { Map } from 'immutable'

import votesReducer from './'

const SEND_UPVOTE = 'SEND_UPVOTE'
const SEND_DOWNVOTE = 'SEND_DOWNVOTE'

let state = votesReducer(undefined, {})

test('initializes with state', t => {
  t.true(Map.isMap(state))
})

test('SEND_UPVOTE adds combination to upvotes', t => {
  const combo = ['#fff', '#444']
  state = fireAction(SEND_UPVOTE, state, combo)
  t.deepEqual(state.get('upvotes').toJS(), [combo])
})

test('SEND_DOWNVOTE adds combination to downvotes', t => {
  const combo = ['#fff', '#444']
  state = fireAction(SEND_DOWNVOTE, state, combo)
  t.deepEqual(state.get('downvotes').toJS(), [combo])
})

const fireAction = (type, currentState, combo) => (
  votesReducer(currentState, { type, combo })
)
