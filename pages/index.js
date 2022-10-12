/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useEffect, useState } from 'react'
import contrast from 'get-contrast'
import { ArrowRightCircle, ArrowUpCircle, ArrowDownCircle, Shuffle } from 'react-feather'

import Layout from '../components/layout'
import Button from '../components/button'
import ContrastBoxes from '../components/contrast-boxes'

import { vote, getColorPair } from '../lib'

const Page = () => {
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
<header
        sx={{
          display: 'sticky',
          top: 0,
          borderBottom: "thin solid",
          display: 'grid',
          alignItems: 'center',
          gridTemplateColumns: '1fr 1fr 1fr'
        }}
      >
        <h1
          sx={{
            display: "flex",
            m: 0,
            alignItems: "center",
            fontSize: [2, 2, 2],
            gap: 3,
            pl: 4,
            py: 3,
          }}
        >
          <span
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: 'center',
              height: '24px',
              width: '24px',
              backgroundImage: 'linear-gradient(90deg, '+colorPair[0]+' 50%, transparent 50%, transparent 100%)',
              boxShadow: '0 0 0 2px '+colorPair[0],
              borderRadius: '9999px',

            }}>
          </span>
          <span sx={{ display: ['none', 'block', 'block'] }}>Randoma11y</span>
        </h1>
<p
        sx={{
          mx: 'auto',
          textAlign: 'center',
          fontWeight: 500,
          fontSize: [0,1,2],
            fontFamily: 'monospace, monospace',
        }}
      >
        {contrastRatio} <span sx={{display: ['none', 'inline-block', 'inline-block']}}>contrast {contrastScore}</span>
      </p>
<div
        sx={{
          ml: 'auto',
          height: '100%',
          display: 'flex',
          alignItems: 'stretch',
        }}
      >
        <div sx={{ display: 'none' }}>
        <Button
          color={colorB}
          backgroundColor={colorA}
          onClick={upvote}
        >
          <ArrowUpCircle size={24} /> Upvote
        </Button>
        </div>
<Button
          color={colorA}
          backgroundColor={colorB}
          borderColor={colorB}
          onClick={skip}
        >
          New colors
          <ArrowRightCircle size={20} />
        </Button>
        <div sx={{ display: 'none' }}>
        <Button
          color={colorA}
          backgroundColor={colorB}
          onClick={downvote}
          sx={{ ml: 3 }}
        >
          <ArrowDownCircle size={24} />
          Downvote
        </Button>
    </div>
        
      </div>
      </header>
      
      <ContrastBoxes colorPair={colorPair} />
      
    </Layout>
  )
}

export default Page
