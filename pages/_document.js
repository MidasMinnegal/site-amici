import { Html, Head, Main, NextScript } from 'next/document'
import {css, Global} from "@emotion/react";
import {h1Style, h2Style, h3Style} from "@/styles/headers";
import {fonts} from "@/styles/variables"


const GlobalStyle = css`
  body {
    margin: 0;
    padding: 0;
    font-family: ${fonts.main};
    font-size: 1rem;
    overflow-x: hidden;
  }
  
  p {
    line-height: 1.5;
    margin: 0;
  }
  
  * {box-sizing: border-box;}
  h1 {${h1Style}}
  h2 {${h2Style}}
  h3 {${h3Style}}
`

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Amici website</title>
        <meta name="description" content="Amici Adt Vitam is een dispuut in de gezellige stad Enschede. Op woensdag drinken wij dan ook graag gezellig een drankje met elkaar mocht de gelegenheid zich voordoen." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Courgette&family=Roboto:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet" />

      </Head>
      <Global
        styles={GlobalStyle}
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
