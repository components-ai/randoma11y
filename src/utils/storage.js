const VOTES_KEY = 'random-a11y-votes'

export function recordVote (data) {
  if (global.window && global.window.localStorage) {
    const ls = global.window.localStorage
    let votesObj
    let votes = ls.getItem(VOTES_KEY)
    if (votes === null) {
      votesObj = {
        up: {},
        down: {}
      }
    } else {
      votesObj = JSON.parse(votes)
    }
    if (data.vote && data.vote.value) {
      votesObj.up[data.combo.id] = data.combo
    } else {
      votesObj.down[data.combo.id] = data.combo
    }
    ls.setItem(VOTES_KEY, JSON.stringify(votesObj))
  }
}

export function getVotes () {
  if (global.window && global.window.localStorage) {
    return JSON.parse(global.window.localStorage.getItem(VOTES_KEY))
  }
}
