/** @jsxRuntime classic */
/** @jsx jsx */
import { Global } from "@emotion/react";
import { ThemeProvider, jsx } from "theme-ui";
import Head from "next/head";

import theme from "../theme";

export default ({ children, colorPair = [] }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Head>
        <title>Randoma11y</title>
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
          body: {
            fontFamily: "system-ui, sans-serif",
            margin: 0,
            color: colorPair[0],
            backgroundColor: colorPair[1],
          },
          "*": {
            boxSizing: "border-box",
          },
        }}
      />
      <header
        sx={{
          borderBottom: "thin solid",
          px: [4, 5, 5],
          py: 2,
        }}
      >
        <h1
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: [2, 3, 3],
          }}
        >
          <span
            sx={{
              display: "flex",
              flexDirection: "column",
              mr: 3,
            }}
          >
            <span
              sx={{
                p: 2,
                border: "thin solid",
              }}
            />
            <span
              sx={{
                p: 2,
                backgroundColor: colorPair[0],
                border: "thin solid",
              }}
            />
          </span>
          Randoma11y
        </h1>
      </header>
      <div
        sx={{
          py: [4, 5, 5],
        }}
      >
        {children}
      </div>
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
          © Copyright 2016-2021,{" "}
          <a
            sx={{ color: colorPair[0], fontWeight: "bold" }}
            href="https://components.ai"
          >
            Components AI
          </a>
        </div>
      </footer>
    </div>
  </ThemeProvider>
);
