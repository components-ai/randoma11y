import React from 'react'
import { Link } from 'react-router'

const TwitterButton = () => {
  const tweetText = 'Find a11y friendly color combinations and vote for your favourite at'
  const tweetUrl = `https://twitter.com/share?text=${tweetText}`
  return (
    <a 
      href={tweetUrl} 
      className='tc lh-solid dib dim ttu fw6 v-mid link mb4 twitter-share-button br1 ph3 pv2' 
      style={{ color: 'inherit', fontSize: 12 }} 
      data-via='mrmrs_' 
      data-size='large'>
      <svg className="mr2 dib w1 v-mid relative" viewBox="0 0 32 32" style={{ fill: 'currentColor', top: -2 }}>
        <title>twitter icon</title>
        <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"></path>
      </svg>
      <span className="dib">Tweet This</span>
    </a>
  )
}

const Footer = () => (
  <footer className='pt5 pb5 bt'>
    <div className="mw8 center ph4">
    <div className="tc">
      <TwitterButton />
    </div>
    <h3 className='fw6 f5 measure center'>What is this?</h3>
    <p className='mt0 measure f5 lh-copy center'>
        An ongoing project to try and curate beautiful color palettes that are a11y friendly.
      This app generates a random palette and allows you to vote the combination up or down.
      We'll store the info and <a href='/stats/' className='dim black' style={{ color: 'inherit' }}>keep our api open.</a>
    </p>
    <p className='mb3 mt5 ttu tracked-normal tc b' style={{ fontSize: 12 }}>
      A <a href='https://compositor.io' style={{ color: 'inherit', fontSize: 12 }} className='link dim b'>Compositor</a> project 
    </p>
  </div>
  </footer>
)

export default Footer
