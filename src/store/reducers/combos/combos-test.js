import test from 'ava'
import { Map } from 'immutable'

import combosReducer from './'

let state = combosReducer(undefined, {})

test('initializes with state', t => {
  t.true(Map.isMap(state))
})

// const fireAction = (type, currentState, combo) => (
//   combosReducer(currentState, { type, combo })
// )
