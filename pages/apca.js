/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useEffect, useState } from 'react'
import  Link  from 'next/link'
import contrast from 'get-contrast'
import { calcAPCA } from "apca-w3";
import { Sliders, ArrowRightCircle, ArrowUpCircle, ArrowDownCircle } from 'react-feather'

import Layout from '../components/layout'
import Button from '../components/button'
import ContrastBoxes from '../components/contrast-boxes'


import { vote, getColorPair } from '../lib/contrast'

const Page = ({ pinnedColor }) => {
  const [colorPair, setColorPair] = useState([])
  const newColorPair = () => {
    setColorPair(getColorPair(pinnedColor))
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
  const skiplink = (color) => {
    setColorPair(getColorPair(color))
  }
  const handleKeyUp = (e) => {
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
        <div sx={{ minHeight: '66vh', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 4, }}>
          <h2>Generating color pair...</h2>
        </div>
      </Layout>
    )
  }


  const [colorA, colorB] = colorPair

  const contrastRatio = contrast.ratio(colorA, colorB).toFixed(2)
  const contrastScore = contrast.score(colorA, colorB)

  const apcaScoreFg = calcAPCA(colorA, colorB)
  const apcaScoreBg = calcAPCA(colorB, colorA)

  const ColorLink = ({color, ...props}) => {
    return (
      <Link href={{
        pathname: '/apca',
        query: { color: color },
      }} scroll={false}
      >
        <a
          onClick={() => skiplink(color)}
          sx={{
          display: 'block',
          textDecoration: 'none',
          backgroundColor: color,
          borderRadius: '9999px',
          height: ['32px', '24px', '24px'],
          aspectRatio: '1/1',
          cursor: 'pointer',
        }} {...props} />
      </Link>
    )
  }
  return (
    <Layout colorPair={colorPair}>
      <header
        sx={{
          position: 'sticky',
          top: 0,
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
          borderBottomColor: 'currentColor',
          display: 'grid',
          alignItems: 'center',
          gridTemplateColumns: '1fr 1fr 1fr',
          backgroundColor: colorPair[1]
        }}
      >
      <Link href={{
        pathname: '/',
        query: { color: colorPair[0] },
      }} scroll={false}
      >
        <a
          title="Home"
          sx={{
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'flex',
            m: 0,
            alignItems: 'center',
            fontSize: [2, 2, 2],
            gap: 3,
            pl: 4,
            py: 3,
            color: 'inherit',
            fontWeight: 'bold',
          }}
        >
          <span
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '24px',
              width: '24px',
              backgroundImage:
                'linear-gradient(90deg, ' +
                colorPair[0] +
                ' 50%, transparent 50%, transparent 100%)',
              boxShadow: '0 0 0 2px ' + colorPair[0],
              borderRadius: '9999px',
            }}
          ></span>
          <span sx={{ display: ['none', 'block', 'block'] }}>Randoma11y</span>
        </a>
    </Link>
      <Link href={{
        pathname: '/',
        query: { color: colorPair[0] },
      }} scroll={false}
      >
        <a
          title='Switch algorithms'
          sx={{
            cursor: 'pointer',
            textDecoration: 'none',
            color: 'currentColor',
            my: 0,
            mx: 'auto',
            textAlign: 'center',
            fontWeight: 500,
            fontSize: [0, 1, 2],
            fontFamily: 'monospace, monospace',
            transition: 'all .2s ease',
            ':hover':{
              filter: 'saturate(150%), contrast(125%)'
            }
          }}
        >
          <div sx={{display: 'flex', alignItems: 'center'}}>
            <div sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', color: colorA, backgroundColor: colorB, boxShadow: 'inset 0 0 0 2px currentColor', width: 32, height: 32, borderRadius: '100%', mr: 2 }}> L<sup>c</sup></div><span sx={{ width: '6ch', textAlign: 'right', }}>{apcaScoreFg.toFixed(2)}</span>
            <div sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', color: colorB, backgroundColor: colorA, width: 32, height: 32, borderRadius: '50%', mr: 2, ml: 4 }}> L<sup>c</sup></div><span sx={{ width: '6ch', textAlign: 'right', }}>{apcaScoreBg.toFixed(2)}</span>
          </div>
        </a>
    </Link>
        <div
          sx={{
            ml: 'auto',
            height: '100%',
            display: 'flex',
            alignItems: 'stretch',
          }}
        >
          <div sx={{ display: 'none' }}>
            <Button color={colorB} backgroundColor={colorA} onClick={upvote}>
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
      <section sx={{
         mx: 'auto',
         bg: 'tranparent',
           //boxShadow: 'inset 0 0 0 1px currentColor',
           maxWidth: '64rem',
    }}>
         <div sx={{ 
           display: 'flex',
           flexWrap: 'wrap',
           gap: '8px', 
           filter: 'saturate(100%)',
           transition: 'filter .25s ease',
           ':hover': {
             filter: 'saturate(100%)'
           },
           ':hover': {
             filter: 'saturate(100%)'
           },
           py: 4,
           px: 4,
           mx: 'auto',
           justifyContent: 'center',
         }}>
            <div sx={{ '> a': {
             // boxShadow: '0 0 2px 4px rgba(0,0,0,.125)'
            }}}><ColorLink color='white' /></div>
            <ColorLink color='#eeeeee' />
            <ColorLink color='#333333' />
            <ColorLink color='#000000' />
            <ColorLink color='#8200e8' />
            <ColorLink color='#c91313' />
            <ColorLink color='#ffd700' />
            <ColorLink color='#ffff00' />
            <ColorLink color='#00ff7f' />
            <ColorLink color='#000080' />
            <ColorLink color='#0011ff' />
            <ColorLink color='#00ffff' />
         </div>
      </section>

      <ContrastBoxes colorPair={colorPair} />
<div sx={{ textAlign: 'center', pt: 5, }}>
          <a
            sx={{ 
              display: 'inline-flex',
              mx: 'auto',
              color: colorPair[0], fontWeight: "bold", textDecoration: 'none', 
                gap: '8px',
                transition: 'all .25s ease',
                ':hover': {
                  filter: 'hue-rotate(140deg)',
                  opacity: .8,

                }

            }}
            href="https://components.ai/u/system/cl97otyus041709lblou2lylf/cl97ou8xs068609l3he0g8kau"
          >
            <Sliders size={20} strokeWidth={2} /> Advanced Editor
          </a>
     </div>
    
    </Layout>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      pinnedColor: context.query.color? decodeURI(context.query.color) : null,
    },
  }
}

export default Page
