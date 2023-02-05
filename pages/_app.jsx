import { useEffect, useEfffect } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import moment from 'moment'
import 'moment/locale/pt-br'


const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }
 
`

function App ({ Component, pageProps }) {
  useEffect(() => {
    moment.locale('pt-br')
  }, [])

  return (
    <ThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
    
  )
}

export default App