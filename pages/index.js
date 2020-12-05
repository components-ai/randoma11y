/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useEffect, useState } from 'react'
import contrast from 'get-contrast'

import Layout from '../components/layout'
import Button from '../components/button'
import ContrastBoxes from '../components/contrast-boxes'

import { vote, getColorPair } from '../lib'

export default () => {
  const [colorPair, setColorPair] = useState([])

  const newColorPair = () => {
    setColorPair(getColorPair())
  }

  const upvote = async () => {
    await vote({ upvote: true, colorPair })
    newColorPair()
  }
  const downvote = async () => {
    await vote({ upvote: false, colorPair })
    newColorPair()
  }
  const skip = () => {
    newColorPair()
  }
  const handleKeyUp = e => {
    const { key } = e

    if (key === 'ArrowUp') {
      upvote()
    } else if (key === 'ArrowDown') {
      downvote()
    } else if (key === 'ArrowRight') {
      skip()
    } else {
      return
    }
  }

  useEffect(() => {
    newColorPair()
  }, [])

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [colorPair])

  if (!colorPair.length) {
    return (
      <Layout>
        <h1>Generating color pair...</h1>
      </Layout>
    )
  }

  const [colorA, colorB] = colorPair

  const contrastRatio = contrast.ratio(colorA, colorB).toFixed(2)
  const contrastScore = contrast.score(colorA, colorB)
  
  return (
    <Layout colorPair={colorPair}>
      <p
        sx={{
          textAlign: 'center',
          fontWeight: 500,
          fontSize: [2, 3, 4]
        }}
      >
        {contrastRatio} contrast {contrastScore}
      </p>
      <ContrastBoxes colorPair={colorPair} />
      <div
        sx={{
          pt: [3, 4, 5],
          textAlign: 'center'
        }}
      >
        <Button
          color={colorB}
          backgroundColor={colorA}
          onClick={upvote}
        >
          Upvote
        </Button>
        <Button
          color={colorA}
          backgroundColor={colorB}
          onClick={downvote}
          sx={{ ml: 3 }}
        >
          Downvote
        </Button>
        <br />
        <Button
          color={colorA}
          backgroundColor={colorB}
          borderColor={colorB}
          onClick={skip}
          sx={{ mt: 3, ml: -3 }}
        >
          Skip
        </Button>
      </div>
    </Layout>
  )
}
