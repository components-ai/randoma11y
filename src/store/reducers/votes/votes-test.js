import test from 'ava'
import { Map } from 'immutable'
import isBlank from 'is-blank'

import votesReducer from './'

const SEND_UPVOTE = 'SEND_UPVOTE'
const SEND_DOWNVOTE = 'SEND_DOWNVOTE'
const SET_CURRENT_COMBO = 'SET_CURRENT_COMBO'

const combo = ['#fff', '#444']
let state = votesReducer(undefined, {})

test('initializes with state', t => {
  t.true(Map.isMap(state))
})

test('SEND_UPVOTE adds combination to upvotes', t => {
  state = fireAction(SEND_UPVOTE, state, combo)
  t.deepEqual(state.get('upvotes').toJS(), [combo])
})

test('SEND_UPVOTE sets currentVote to "up"', t => {
  state = fireAction(SEND_UPVOTE, state, combo)
  t.deepEqual(state.get('currentVote'), 'up')
})

test('SEND_DOWNVOTE adds combination to downvotes', t => {
  state = fireAction(SEND_DOWNVOTE, state, combo)
  t.deepEqual(state.get('downvotes').toJS(), [combo])
})

test('SEND_DOWNVOTE sets currentVote to "down"', t => {
  state = fireAction(SEND_DOWNVOTE, state, combo)
  t.deepEqual(state.get('currentVote'), 'down')
})

test('SET_CURRENT_COMBO sets currentVote to null', t => {
  state = fireAction(SET_CURRENT_COMBO, state, combo)
  t.true(isBlank(state.get('currentVote')))
})

const fireAction = (type, currentState, combo) => (
  votesReducer(currentState, { type, combo })
)
