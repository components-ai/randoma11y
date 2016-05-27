import createLogger from 'redux-logger'
import { immutableToJS } from '../utils/immutableToJS'

export default createLogger({
  collapsed: true,
  stateTransformer: (state) => {
    return immutableToJS(state)
  }
})
