import randomColor from 'random-hex-color'
import contrast from 'get-contrast'
import firebase from 'firebase/app'
import 'firebase/firestore'

import { FIREBASE_CONFIG } from './constants'

if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG)
}
const db = firebase.firestore()

const DEFAULT_DATA = {
  upvotes: 0,
  downvotes: 0
}

export const vote = async ({ upvote, colorPair }) => {
  const colors = colorPair.sort()
  const id = colors.map(s => s.replace('#', '')).join('')

  const voteDoc = await db.collection('colorVotes').doc(id).get({
    source: 'server'
  })

  let data = null
  if (voteDoc.exists) {
    data = voteDoc.data()
  } else {
    data = { ...DEFAULT_DATA, id, colors }
  }

  if (upvote) {
    data.upvotes = data.upvotes + 1
  } else {
    data.downvotes = data.downvotes + 1
  }

  await db.collection('colorVotes').doc(id).set(data)
}

export const getColorPair = () => {
  const colorA = randomColor()
  let colorB = randomColor()

  while (!contrast.isAccessible(colorA, colorB)) {
    colorB = randomColor()
  }

  return [
    colorA,
    colorB
  ]
}
