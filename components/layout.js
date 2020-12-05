/** @jsxRuntime classic */
/** @jsx jsx */
import { Global } from "@emotion/core";
import { Container, ThemeProvider, jsx } from "theme-ui";
import { Helmet } from "react-helmet";

import theme from "../theme";

export default ({ children, colorPair = [] }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet>
        <html lang="en" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />
        <title>Randoma11y</title>
        <meta
          property="description"
          content="Get random, accessible color combinations"
        />
        <link
          rel="shortcut icon"
          href="https://user-images.githubusercontent.com/1424573/63131613-9862b880-bf7b-11e9-99d8-09ef94854999.png"
        />
        <meta property="og:url" content="https://randoma11y.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content="Randoma11y" />
      </Helmet>
      <Global
        styles={{
          body: {
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
        }}
      >
        <Container>
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
        </Container>
      </header>
      <Container
        sx={{
          py: [4, 5, 5],
        }}
      >
        {children}
      </Container>
      <footer
        sx={{
          borderTop: "thin solid",
          textAlign: "center",
          py: [4, 5, 6],
        }}
      >
        <Container
          sx={{
            fontSize: [0, 0, 1],
          }}
        >
          © Copyright 2016-2020,{" "}
          <a
            sx={{ color: colorPair[0], fontWeight: "bold" }}
            href="https://components.ai"
          >
            Components AI
          </a>
        </Container>
      </footer>
    </div>
  </ThemeProvider>
);
