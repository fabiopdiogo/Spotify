import { useEffect, useEfffect } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import theme from '../src/theme'


const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: black;
  }

`

function App ({ Component, pageProps }) {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
    
  )
}

export default App