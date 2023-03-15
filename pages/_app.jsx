import { useEffect, useEfffect } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

import theme from '../src/theme'


const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  body {
    font-family: 'Roboto', sans-serif;
    color: black;
    ::-webkit-scrollbar{
      display:none;
    }
  }
`

function App ({ Component, pageProps: {session, ...pageProps} }) {

  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>     
    </SessionProvider>
  )

}

export default App