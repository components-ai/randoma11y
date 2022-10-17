/** @jsxRuntime classic */
/** @jsx jsx */
import { Global } from "@emotion/react";
import { ThemeProvider, jsx } from "theme-ui";
import { Sliders } from 'react-feather'
import Head from "next/head";
import Link from "next/link";

import theme from "../theme";

const ColorLink = ({color, ...props}) => {
  return (
    <Link href={{
      pathname: '/',
      query: { color: color }
    }} passHref>
      <a
        sx={{
        display: 'block',
        textDecoration: 'none',
        backgroundColor: color,
        borderRadius: '9999px',
        height: '24px',
        width: '24px',
      }} {...props} />
    </Link>
  )
}

export default ({ children, colorPair = [] }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Head>
        <title>Randoma11y - Accessible color combinations</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />
        <link
          rel="shortcut icon"
          href="https://user-images.githubusercontent.com/1424573/63131613-9862b880-bf7b-11e9-99d8-09ef94854999.png"
        />
        <meta
          property="description"
          content="Get random, accessible color combinations"
        />
        <meta property="og:title" content="Randoma11y" />
        <meta
          property="og:description"
          content="Get random, accessible color combinations"
        />
        <meta property="og:url" content="https://randoma11y.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content="Randoma11y" />
      </Head>
      <Global
        styles={{
          html: {
            fontFamily: "system-ui, sans-serif",
            margin: 0,
            color: colorPair[0],
            backgroundColor: colorPair[1],
          },
          body: {
            color: 'inherit',
            backgroundColor: 'inherit',
          },
          "*": {
            boxSizing: "border-box",
            transition: 'color .2s ease, background-color .3s ease',
          },
        }}
      />
      
      <div
        sx={{
          pb: [4, 5, 5],
        }}
      >
        {children}
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
      </div>
      <section>
         <div sx={{ 
           p: 4,
           display: 'none', 
           gap: '8px', 
           justifyContent: 'center', 
           filter: 'saturate(0%)',
           transition: 'filter .25s ease',
           ':hover': {
             filter: 'saturate(100%)'
           },
           ':hover': {
             filter: 'saturate(100%)'
           }
         }}>
            <ColorLink color='white' />
            <ColorLink color='black' />
            <ColorLink color='midnightblue' />
            <ColorLink color='navy' />
            <ColorLink color='darkblue' />
            <ColorLink color='mediumblue' />
            <ColorLink color='blue' />
            <ColorLink color='royalblue' />
            <ColorLink color='cornflowerblue' />
            <ColorLink color='dodgerblue' />
            <ColorLink color='deepskyblue' />
            <ColorLink color='skyblue' />
            <ColorLink color='lightblue' />
            <ColorLink color='purple' />
            <ColorLink color='violet' />
            <ColorLink color='magenta' />
            <ColorLink color='fuchsia' />
            <ColorLink color='hotpink' />
            <ColorLink color='pink' />
            <ColorLink color='darkred' />
            <ColorLink color='red' />
            <ColorLink color='crimson' />
            <ColorLink color='tomato' />
            <ColorLink color='orange' />
            <ColorLink color='gold' />
            <ColorLink color='yellow' />
            <ColorLink color='mediumspringgreen' />
            <ColorLink color='springgreen' />
            <ColorLink color='green' />
            <ColorLink color='lime' />
            <ColorLink color='teal' />
            <ColorLink color='aqua' />
            <ColorLink color='cyan' />
         </div>
      </section>
      <footer
        sx={{
          borderTop: "thin solid",
          textAlign: "center",
          py: [4, 5, 6],
        }}
      >
        <div
          sx={{
            fontSize: [0, 0, 1],
          }}
        >
          © Copyright 2016-2022,{" "}
          <a
            sx={{ color: colorPair[0], fontWeight: "bold", textDecoration: 'none', }}
            href="https://components.ai"
          >
            Components AI
          </a>
        </div>
      </footer>
    </div>
  </ThemeProvider>
);
