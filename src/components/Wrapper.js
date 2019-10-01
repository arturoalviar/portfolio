import React from 'react'
import GlobalStyle from '@styles/global.js'
import theme from '@styles/theme.js'
import { Header, Transition } from '@components'
import { ThemeProvider } from 'styled-components'
import 'typeface-muli'
import 'typeface-playfair-display'

const Wrapper = ({ children, location }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Header />
          <Transition location={location}>{children}</Transition>
        </>
      </ThemeProvider>
    </>
  )
}

export default Wrapper
