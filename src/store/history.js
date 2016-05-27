import { hashHistory } from 'react-router'

const _createHashHistory = () => {
  if (global.window) {
    return hashHistory
  }

  return undefined
}

const createHistory = _createHashHistory()

export default createHistory
